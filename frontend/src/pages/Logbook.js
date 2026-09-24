```jsx
import { useEffect, useState } from "react";
import API from "../api";

export default function Logbook() {
  const [entries, setEntries] = useState([]);

  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [poolLength, setPoolLength] = useState(25);
  const [notes, setNotes] = useState("");

  const [setData, setSetData] = useState({
    distance: "",
    stroke: "Freestyle",
    interval: "",
    time: "",
    rest: "",
  });

  const [sets, setSets] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await API.get("/workouts");
      setEntries(res.data);
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  const addSet = () => {
    if (!setData.distance) return;

    setSets([...sets, setData]);

    setSetData({
      distance: "",
      stroke: "Freestyle",
      interval: "",
      time: "",
      rest: "",
    });
  };

  const saveWorkout = async (e) => {
    e.preventDefault();

    try {
      await API.post("/workouts", {
        date,
        poolLength: Number(poolLength),
        notes,
        sets,
      });

      setNotes("");
      setSets([]);
      await fetchEntries();
    } catch (err) {
      console.log("ERROR SAVING WORKOUT:", err);
    }
  };

  return (
    <div className="container">
      <h2>Log a Swim</h2>

      <form onSubmit={saveWorkout} className="card">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Pool Length</label>
        <select
          value={poolLength}
          onChange={(e) => setPoolLength(e.target.value)}
        >
          <option value="25">25m</option>
          <option value="50">50m</option>
        </select>

        <h3>Add Set</h3>

        <input
          type="number"
          placeholder="Distance (m)"
          value={setData.distance}
          onChange={(e) =>
            setSetData({ ...setData, distance: e.target.value })
          }
        />

        <select
          value={setData.stroke}
          onChange={(e) =>
            setSetData({ ...setData, stroke: e.target.value })
          }
        >
          <option>Freestyle</option>
          <option>Backstroke</option>
          <option>Breaststroke</option>
          <option>Butterfly</option>
          <option>IM</option>
          <option>Kick</option>
          <option>Pull</option>
        </select>

        <input
          type="text"
          placeholder="Interval (e.g. 1:30)"
          value={setData.interval}
          onChange={(e) =>
            setSetData({ ...setData, interval: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Time (e.g. 1:12)"
          value={setData.time}
          onChange={(e) =>
            setSetData({ ...setData, time: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Rest (e.g. 20s)"
          value={setData.rest}
          onChange={(e) =>
            setSetData({ ...setData, rest: e.target.value })
          }
        />

        <button type="button" onClick={addSet}>
          Add Set
        </button>

        {sets.length > 0 && (
          <div>
            <h3>Today's Sets</h3>

            {sets.map((set, index) => (
              <div key={index}>
                {set.distance}m {set.stroke} — {set.time}
              </div>
            ))}
          </div>
        )}

        <textarea
          placeholder="Notes about the session..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button type="submit">Save Swim</button>
      </form>

      <h2>History</h2>

      <div className="card">
        {entries.map((entry) => (
          <div key={entry._id} style={{ marginBottom: "15px" }}>
            <strong>
              {new Date(entry.date).toLocaleDateString()}
            </strong>

            <br />

            {entry.poolLength}m pool

            <br />

            {entry.sets?.length || 0} sets

            {entry.notes && (
              <>
                <br />
                {entry.notes}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
```
