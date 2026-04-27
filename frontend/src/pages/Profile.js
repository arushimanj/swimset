import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
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

  const performanceData = [
    { date: "Jan", time: 62 },
    { date: "Feb", time: 61 },
    { date: "Mar", time: 60.5 },
    { date: "Apr", time: 60.2 },
    { date: "May", time: 59.8 }
  ];

  const data = [
    { name: "Sprint", value: 60 },
    { name: "Aerobic", value: 40 }
  ];

  const COLORS = ["#38bdf8", "#0f172a"];

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="container">

      {/* USER CARD */}
      <div className="card">
        <h2>{user.name}</h2>
        <p>{user.mainStroke} specialist</p>
        <p>{user.mainEvent} main event</p>
      </div>

      {/* PIE CHART */}
      <div className="card">
        <h3>Training Focus</h3>

        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* LINE CHART */}
      <div className="card">
        <h3>Performance Trend</h3>

        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <LineChart data={performanceData}>
              <CartesianGrid stroke="#1e293b" />
              <XAxis dataKey="date" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Line
                type="monotone"
                dataKey="time"
                stroke="#38bdf8"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
