const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose =
  require("passport-local-mongoose").default;
  // username field add karta hai
// password hash karta hai
// login methods provide karta hai
const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);