const Listing=require("../models/listing");
const Review=require("../models/review");

module.exports.createReview=async (req, res) => {

    let listing = await Listing.findById(req.params.id); //id se find database me
    let newReview = new Review(req.body.review); //review ka model object bana reviews schema me dale
     newReview.author=req.user._id;
    listing.reviews.push(newReview);  //main listing me push hua 
   
    await newReview.save(); 
    await listing.save();
    req.flash("success","New Review Created!");
    res.redirect(`/listings/${listing._id}`);

}

module.exports.destroyReview=async(req,res)=>{
    let{id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})// review Array me jo value match hui use nikalo
    await Review.findByIdAndDelete(reviewId);// fir delete krdo
  req.flash("success","Review Deleted!");
    res.redirect(`/listings/${id}`)
}