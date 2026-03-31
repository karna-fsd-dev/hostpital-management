import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/NavBar";

function AdminDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/admin/appointments").then(res => setData(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>All Appointments</h2>

      {data.map((a) => (
        <div key={a._id}>
          <p>{a.patient?.name}</p>
          <p>{a.doctor?.name}</p>
          <p>{a.date}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;