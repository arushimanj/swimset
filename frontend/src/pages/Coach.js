import { useEffect, useState } from "react";
import API from "../api";

export default function Coach({ token }) {
  const [today, setToday] = useState(null);
  const [revealed, setRevealed] = useState({});

  useEffect(() => {
    const fetchWeek = async () => {
      try {
        const res = await API.post("/generator/week", {}, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const todayName = new Date()
          .toLocaleDateString("en-US", { weekday: "long" })
          .toLowerCase();

        setToday(res.data[todayName]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWeek();
  }, [token]);

  if (!today) {
  return (
    <div className="container">
      <h1>REST DAY !! </h1>
      <p>The perfect time for your academic pursuits. Stay sharp.</p>
    </div>
  );
}

  return (
    <div className="container">
      <h1>Today's Training</h1>

      {today.map((session, i) => (
        <div key={i} className="card">
          <h2>{session.type.toUpperCase()}</h2>

          {!revealed[i] ? (
            <button onClick={() => setRevealed({ ...revealed, [i]: true })}>
              Show Set
            </button>
          ) : (
            <div>
              {session.mainSet.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
