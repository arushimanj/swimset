import "./App.css";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [page, setPage] = useState("login");

  // not logged in
  if (!token) {
    return (
      <div className="container">
        <h1>SwimSet</h1>

        {page === "login" && (
          <Login setToken={setToken} setPage={setPage} />
        )}

        {page === "register" && (
          <Register setPage={setPage} />
        )}
      </div>
    );
  }

  // logged in
  return (
    <>
      <Navbar setToken={setToken} setPage={setPage} />
      <Dashboard token={token} />
    </>
  );
}

export default App;