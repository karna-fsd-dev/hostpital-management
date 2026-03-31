const mongoose=require("mongoose")
const appointmentSchema=new mongoose.Schema({
  patient:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  doctor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  date:{
    type:Date,
    required:true
  },
  status:{
    type:String,
    enum:["pending","approved","rejected"],
    default:"pending"
  }
  
},
{
timestamps:{type:true}
})
module.exports=mongoose.model("Appointment",appointmentSchema)