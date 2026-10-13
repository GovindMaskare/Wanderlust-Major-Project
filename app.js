
if(process.env.NODE_ENV !="production"){
require('dotenv').config();
}

const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);


 
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=8080;
//Schema ke model ko require kiya
// const Listing = require('./models/listing.js');
  const ejsMate = require('ejs-mate');
  app.engine('ejs', ejsMate);//ejs-Mate template
//Inculde Sub template

const flash=require("connect-flash");
const ExpressError=require("./utils/ExpressError.js");// OOps // inheritence for status and message

const passport=require("passport");
const localStrategy=require("passport-local");
const User=require("./models/user.js");

const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");


const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const path=require("path");
const listing = require("./models/listing.js");
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"/public")));

const session=require("express-session");
const MongoStore = require("connect-mongo").default;

console.log("MongoStore =", MongoStore);
const dbUrl = process.env.ATLASDB_URL;

const store=MongoStore.create({
  mongoUrl : dbUrl,
  crypto:{
    secret:process.env.SECRET,
  },
  touchAfter:24*3600,
});

store.on("error", (err) => {
  console.log("ERROR IN MONGO SESSION STORE:", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 30 * 60 * 1000,
    httpOnly: true,
  },
};


main()
.then(()=>{
    console.log("Connection Successfull");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);

}



const sessionOption={
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
}




app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());//user ki infomation  session ke nader store krne 
passport.deserializeUser(User.deserializeUser());//ulte / remove krna

app.use((req,res,next)=>{// ye middleware actual message show krne ke liye
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
    // Flash message ko res.locals me store karta hai,
// taaki har EJS template me access ho sake
  
});

app.get("/demouser",async(req,res)=>{
    let fakeUser=new User({
        email:"student@gmail.com",
        username:"delta-student",
    });
    let registeredUser=await User.register(fakeUser,"helloworld");
  res.send(registeredUser);
});



app.use("/listings",listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/",userRouter)



// app.get("/testListing",async(req,res)=>{
//     let sampleListing=new Listing({
//     title:"my new Villa",
//     description:" By the Waterfall",
//     price:1200 ,
//     location:" Calangute , Goa",               phla data insert 
//     country:"India",
//     });

//     await sampleListing.save();//await ke jagah then bhi use kr sakte hai
//     console.log(sampleListing);
//     res.send("Successfull")
// });
 
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

//middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs",{message});
    // res.status(statusCode).send(message);
});



app.listen(port,()=>{
    console.log("Server is listening at port");
})