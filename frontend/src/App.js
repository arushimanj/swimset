import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  if (!token) {
    return (
  <div className="container">
    <h1>SwimSet</h1>
    <Login setToken={setToken} />
    <Register />
  </div>
);
  }
  return <Dashboard token={token} />;
}

export default App;
