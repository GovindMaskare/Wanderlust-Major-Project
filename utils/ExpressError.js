class ExpressError extends Error{  // statuscode & mesage ke liye
constructor(statusCode,message){
    super();
    this.statusCode=statusCode;
    this.message=message;
}
}
module.exports=ExpressError; 