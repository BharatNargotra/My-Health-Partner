import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Health Monitor Dashboard</h1>

      <p><strong>Status:</strong> {user?.goal || "Active User"}</p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate("/calendar")}>
          View Progress Calendar
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;