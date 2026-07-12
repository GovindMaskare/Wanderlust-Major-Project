const Listing = require("../models/listing");
const axios = require("axios");

module.exports.index=async(req,res)=>{

  const allListings=   await Listing.find();
  res.render("listings/index.ejs",{allListings})
};

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.showListing=async(req,res)=>{
    let {id}=req.params;
   const listing= await Listing.findById(id)
   .populate({
    path: "reviews",
    populate: {
      path:"author",
    },
  }).populate("owner");
  if(!listing){
    req.flash("error","Listing you requested for does not exist!");
    return res.redirect("/listings");
}

   res.render("listings/show.ejs",{listing});
}




module.exports.createListing=async(req,res,next)=>{
   const location = req.body.listing.location;
   // ye sab location ke liye 
  const geoResponse = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: location,
        format: "json",
        limit: 1,
      },
      headers: {
        "User-Agent": "wanderlust-app",
      },
    }
  );
  if (geoResponse.data.length === 0) {
    req.flash("error", "Location not found!");
    return res.redirect("/listings/new");
  }


  // if(!req.body.listing){
        //     throw new ExpressError(400 ,"Send Valid data for listings");
        // }
  
  // let {title,desciption,image,price,country,location}=req.body;
    let listing=req.body.listing; // form se aaya data
    let url=req.file.path;
    let filename=req.file.filename;
    const newListing = new Listing(listing); //  new model object
   newListing.owner=req.user._id;
   newListing.image = {
    url: url,
    filename: filename
};

  newListing.geometry = {
  type: "Point",
  coordinates: [
    Number(geoResponse.data[0].lon),
    Number(geoResponse.data[0].lat),
  ],
};

   let savedListing= await newListing.save();  //DB me save
    req.flash("success","New Listing Created!");
    res.redirect("/listings");

};


module.exports.renderEditForm=async(req,res)=>{
    let {id}=req.params;
   const listing= await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    
    let OriginalImageUrl=listing.image.url;
    OriginalImageUrl=  OriginalImageUrl.replace("/upload","/upload/w_250")
   res.render("listings/edit.ejs",{listing,OriginalImageUrl});
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true }
    );

    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;

        listing.image = {
            url,
            filename
        };

        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing=async (req, res) => {
      let { id } = req.params;
      await Listing.findByIdAndDelete(id);
      req.flash("success","Listing Deleted!");
      res.redirect("/listings");
  }


  module.exports.searchListing = async (req, res) => {

  const { location } = req.query;

  const allListings = await Listing.find({
    location: {
      $regex: location,
      $options: "i",
    },
  });

  if (allListings.length === 0) {
    req.flash("error", "No listings found!");
    return res.redirect("/listings");
  }

  res.render("listings/index.ejs", { allListings });

};