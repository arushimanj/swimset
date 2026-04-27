import "./App.css";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [page, setPage] = useState("dashboard");

  if (!token) {
    return (
      <div className="container">
        <h1>SwimSet</h1>
        <Login setToken={setToken} />
        <Register />
      </div>
    );
  }

  return (
    <>
      <Navbar setToken={setToken} setPage={setPage} />

      {page === "dashboard" && <Dashboard token={token} />}
      {page === "profile" && <div>Profile coming soon</div>}
    </>
  );
}

export default App;