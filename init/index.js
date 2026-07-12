const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing = require('../models/listing');


const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
    console.log("Connection Successfull");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);

}

const initDB= async()=>{
    await Listing.deleteMany({});
initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6a33c388f7b7e1fd9f9f8fce"
}));    await Listing.insertMany(initData.data);
    console.log("data was inatialized");
}

initDB();