import { useState } from "react";
import API from "../api";

export default function Register() {
  const [form, setForm] = useState({});

  const handleRegister = async () => {
    await API.post("/auth/register", form);
    alert("Registered!");
  };

  return (
    <div className="card">
      <h2>Register</h2>
      <input placeholder="name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="email" onChange={e => setForm({...form, email: e.target.value})} />
      <input placeholder="password" onChange={e => setForm({...form, password: e.target.value})} />
      <input placeholder="main stroke" onChange={e => setForm({...form, mainStroke: e.target.value})} />
      <input placeholder="main event" onChange={e => setForm({...form, mainEvent: e.target.value})} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
