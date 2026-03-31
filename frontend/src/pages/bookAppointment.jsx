import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/NavBar";

function BookAppointment() {
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");

  const book = async () => {
    await API.post("/patient/book", { doctorId, date });
    alert("Booked");
  };

  return (
    <div>
      <Navbar />
      <h2>Book Appointment</h2>

      <input placeholder="Doctor ID"
        onChange={(e) => setDoctorId(e.target.value)} />

      <input type="date"
        onChange={(e) => setDate(e.target.value)} />

      <button onClick={book}>Book</button>
    </div>
  );
}

export default BookAppointment;