import { useState } from "react";
import API from "../services/api";

function Signup() {
  const [form, setForm] = useState({
  
    email: "",
    password: "",
    role: "patient"
  });

  const handleSignup = async () => {
    try{
    await API.post("/auth/signup", form);
    alert("Signup Success");
  }catch(error){
    console.error(error)
    alert("Signup failled")
  }
  }
  return (
    <div>
      <h2>Signup</h2>

      {/* <input placeholder="Name"
        onChange={(e) => setForm({...form, name: e.target.value})} /> */}

      <input placeholder="Email"
        onChange={(e) => setForm({...form, email: e.target.value})} />

      <input placeholder="Password"
        onChange={(e) => setForm({...form, password: e.target.value})} />

      <select onChange={(e) => setForm({...form, role: e.target.value})}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}


export default Signup