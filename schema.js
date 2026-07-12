const joi=require("joi");

// server side validation schema ke liye 
//individual feild empty nahi aana  chahiye database me
module.exports.listingSchema = joi.object({ 
    listing : joi.object({
        title:joi.string().required(),
        description:joi.string().required(),
        location:joi.string().required(),
        country:joi.string().required(),
        price:joi.number().required().min(0),
    image: joi.string().allow("", null)
    }).required()
})

module.exports.reviewSchema=joi.object({
    review:joi.object({
    rating:joi.number().required().min(1).max(5),
    comment:joi.string().required(),
    }).required(),
});
