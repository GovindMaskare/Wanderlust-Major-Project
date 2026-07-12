const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/WrapAsync.js");
const Listing = require('../models/listing.js');
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listing.js");

const multer=require('multer');//file ko recieve krna
const {storage}=require("../cloudconfig.js");// storage banaye
const upload=multer({storage}); // file yaha save  hogi

router.get("/search", listingController.searchListing);//

router // common route ko sath me likha
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,  //Form se data add krne ke liye
    validateListing,upload.single('listing[image]'),
    wrapAsync(listingController.createListing)
);


// Open form for ADD
router.get("/new",isLoggedIn,listingController.renderNewForm);

router
  .route("/:id")
  // Show particular data
  .get(wrapAsync(listingController.showListing))
  // Update
  .put(
    isLoggedIn,
    isOwner,upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  // Delete
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
  );










//edit route form 
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));






module.exports=router;