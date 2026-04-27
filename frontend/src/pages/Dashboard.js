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
    <h2>Your Week</h2>

    {Object.entries(week).map(([day, sessions]) => (
      <div key={day} className="card">
        <h3>{day.toUpperCase()}</h3>

        {sessions.map((s, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <strong>{s.type.toUpperCase()}</strong>

            <ul>
              {s.mainSet.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ))}
  </div>
);
}