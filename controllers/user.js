const User=require("../models/user");

module.exports.renderSignupForm=(req,res)=>{
  res.render("users/signup.ejs");
}


module.exports.signup=async(req,res)=>{
try{
    let {username ,email,password}=req.body;//data aaya 
const newUser=new User({email,username});//model banaya
const registeredUser=await User.register(newUser,password);//regeste kiya

req.login(registeredUser,(err)=>{ // sign up ke baad login nahi dikhega
    if(err){
        return next(err);
    }
    req.flash("success","Welcome to Wanderlust");
    res.redirect("/listings");
})

}catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
}
}

module.exports.renderLoginForm=(req,res)=>{
 res.render("users/login.ejs");
}

module.exports.login= async (req, res) => {
        req.flash("success", "Welcome back!");
        let redirectUrl=res.locals.redirectUrl||"/listings";
        res.redirect(redirectUrl);
    }

 module.exports.Logout=(req,res)=>{
req.logout((err)=>{
    if(err){
        next(err);
    }
    req.flash("success","you are logged out!");
    res.redirect("/listings");
})
}   