export default function Navbar({ setToken, setPage }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setPage("login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        background: "#020617",
        borderBottom: "1px solid #1e293b"
      }}
    >
      <h2 style={{ margin: 0 }}>SwimSet</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("coach")}>Coach</button>
        <button onClick={() => setPage("profile")}>Profile</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={() => setPage("logbook")}>Logbook</button>
      </div>
    </div>
  );
}
