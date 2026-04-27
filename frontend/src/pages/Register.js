import { useState } from "react";
import API from "../api";

export default function Register({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mainStroke: "",
    mainEvent: ""
  });

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", form);

      alert("Registered!");

      // clear inputs
      setForm({
        name: "",
        email: "",
        password: "",
        mainStroke: "",
        mainEvent: ""
      });

      // go back to login
      setPage("login");

    } catch (err) {
      console.log(err.response?.data);
      alert("Register failed");
    }
  };

  return (
    <div className="card">
      <h2>Register</h2>

      <input value={form.name} placeholder="name"
        onChange={e => setForm({...form, name: e.target.value})} />

      <input value={form.email} placeholder="email"
        onChange={e => setForm({...form, email: e.target.value})} />

      <input value={form.password} type="password" placeholder="password"
        onChange={e => setForm({...form, password: e.target.value})} />

      <input value={form.mainStroke} placeholder="main stroke"
        onChange={e => setForm({...form, mainStroke: e.target.value})} />

      <input value={form.mainEvent} placeholder="main event"
        onChange={e => setForm({...form, mainEvent: e.target.value})} />

      <button onClick={handleRegister}>Register</button>

      <p className="auth-text">Already have an account?</p>

<button
  className="secondary-btn"
  onClick={() => setPage("login")}
>
  Back to Login
</button>
    </div>
  );
}