const express=require("express")
const dotenv =require("dotenv")
const connectedDB=require("./config/db")
const cors=require("cors")

dotenv.config()
connectedDB()

const app=express()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())

app.use("/api/auth",require("./routes/authRoutes"))
app.use("/api/admin",require("./routes/adminRoutes"))
app.use("/api/doctor",require("./routes/doctorRoutes"))
app.use("/api/patient",require("./routes/patientRoutes"))

app.get("/",(req,res)=>{
    res.send("Hospital API Running")
})
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})