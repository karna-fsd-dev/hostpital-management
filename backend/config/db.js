const mongoose=require("mongoose")

const connectedDB=async()=>{
  try{
    await mongoose.connect("mongodb://localhost:27017/HSP-Management")
    console.log("DB is connected")
}catch(error){
    console.log(error)
}
}
module.exports=connectedDB