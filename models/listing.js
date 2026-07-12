const mongoose = require("mongoose");
const reviews = require("./review");
const Schema = mongoose.Schema;
const Review=require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
 image: {
  filename: {
    type: String,
    default: "listingimage",
  },
  url: {
    type: String,
    default: "https://images.unsplash.com/..."
  }
},
  price: Number,
  location: String,
  country: String,
  reviews:[
    {
      type:Schema.Types.ObjectId, // sirf id aayega isme;
      ref:"Review"
    }
  ],
  owner:{
     type:Schema.Types.ObjectId,
     ref:"User"
  },
 geometry: {
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
},

});
//post middleware
listingSchema.post("findOneAndDelete",async(listing)=>{ //agr lisitng delete hui to uske pure review delete ho jaye
  if(listing){
   await Review.deleteMany({_id:{$in:listing.reviews}});
  }
  
})

module.exports = mongoose.model("Listing", listingSchema);
