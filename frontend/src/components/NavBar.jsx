import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/book")}>Book</button>
      <button onClick={() => navigate("/doctor")}>Doctor</button>
      <button onClick={() => navigate("/admin")}>Admin</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;