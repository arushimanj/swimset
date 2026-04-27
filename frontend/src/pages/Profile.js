import { useEffect, useState } from "react";
import API from "../api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
  try {
    const res = await API.get("/auth/me");
    console.log("USER DATA:", res.data);
    setUser(res.data);
  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
  }
};

    fetchUser();
  }, []);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="container">

      {}
      <div className="card">
        <h2>{user.name}</h2>
        <p>{user.mainStroke} specialist</p>
        <p>{user.mainEvent} main event</p>
      </div>

      {}
      <div className="card">
        <h3>Training Focus</h3>

        <div style={{ display: "flex", height: "20px", borderRadius: "10px", overflow: "hidden" }}>
          <div style={{ width: "60%", background: "#38bdf8" }}></div>
          <div style={{ width: "40%", background: "#1e293b" }}></div>
        </div>

        <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.7 }}>
          Sprint vs Aerobic distribution
        </p>
      </div>

    </div>
  );
}