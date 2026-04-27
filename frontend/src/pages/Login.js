import { useState } from "react";
import API from "../api";

export default function Login({ setToken, setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);

    } catch (err) {
      console.log(err.response?.data);
      alert("Login failed");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <input placeholder="email"
        onChange={e => setEmail(e.target.value)} />

      <input type="password" placeholder="password"
        onChange={e => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>

      <p className="auth-text">
  Don't have an account?
</p>

<button
  className="secondary-btn"
  onClick={() => setPage("register")}
>
  Create Account
</button>
    </div>
  );
}