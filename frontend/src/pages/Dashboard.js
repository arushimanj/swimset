import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard({ token }) {
  const [week, setWeek] = useState(null);

  useEffect(() => {
  const fetchWeek = async () => {
    try {
      console.log("TOKEN:", token);

      const res = await API.post(
        "/generator/week",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("RESPONSE:", res.data);
      setWeek(res.data);
    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
    }
  };

  fetchWeek();
}, [token]);

  if (!week) return <p>Loading...</p>;

  return (
  <div className="container">
    <h1>Your Week</h1>

    {Object.entries(week).map(([day, sessions]) => (
      <div key={day} className="card">
        <h2>{day.toUpperCase()}</h2>

        {sessions.map((s, i) => (
          <div key={i} style={{ marginBottom: "15px" }}>
            <h3>{s.type.toUpperCase()}</h3>

            <div style={{ lineHeight: "1.6" }}>
              {s.mainSet.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);
}