import { useEffect, useState } from "react";
import API from "../api";

export default function Logbook() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await API.get("/logbook");
      setEntries(res.data);
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  return (
    <div className="container">
      <h2>Logbook</h2>

      <div className="card">
        {entries.map((entry) => (
          <div key={entry._id} style={{ marginBottom: "10px" }}>
            <strong>{entry.event}</strong> — {entry.time}s  
            <br />
            {entry.meet} | {new Date(entry.date).toLocaleDateString()}
          </div>
        ))}
      </div>
    </div>
  );
}
