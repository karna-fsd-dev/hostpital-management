import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
import BookAppointment from "./pages/BookAppointment";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />

        <Route
          path="/book"
          element={<PrivateRoute><BookAppointment /></PrivateRoute>}
        />

        <Route
          path="/doctor"
          element={<PrivateRoute><DoctorDashboard /></PrivateRoute>}
        />

        <Route
          path="/admin"
          element={<PrivateRoute><AdminDashboard /></PrivateRoute>}
        />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;