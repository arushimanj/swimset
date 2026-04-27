import "./App.css";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Coach from "./pages/Coach";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [page, setPage] = useState("dashboard");

  // not logged in
  if (!token) {
  return (
    <div className="container">
      <h1>SwimSet</h1>

      {}
      {page === "register" ? (
        <Register setPage={setPage} />
      ) : (
        <Login setToken={setToken} setPage={setPage} />
      )}
    </div>
  );
}

  // logged in
  return (
  <>
    <Navbar setToken={setToken} setPage={setPage} />

    {page === "dashboard" && <Dashboard token={token} />}
    {page === "profile" && <Profile />}
    {page === "coach" && <Coach token={token} />}
  </>
);
}

export default App;