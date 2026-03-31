import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/NavBar";

function DoctorDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/doctor/appointments").then(res => setData(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Doctor Appointments</h2>

      {data.map((a) => (
        <div key={a._id}>
          <p>{a.patient?.name}</p>
          <p>{a.date}</p>
          <p>{a.status}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorDashboard;