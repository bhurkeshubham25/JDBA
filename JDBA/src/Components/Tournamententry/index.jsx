import { useEffect, useState } from "react";
import "./myentries.css";
import { authenticatedFetch } from "../../utils/api";

const MyEntries = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const playerId = user?.player_id;

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await authenticatedFetch(`/api/registration/entries/${playerId}`);
        const fetched = await res.json();
        setEntries(fetched.entries || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching entries:", err);
        setEntries([]);
        setLoading(false);
      }
    };

    if (playerId) fetchEntries();
  }, [playerId]);

  const handleRemoveEntry = async (indexToRemove, pid) => {
    const confirm = window.confirm("Are you sure you want to withdraw this entry?");
    if (!confirm) return;

    try {
      await authenticatedFetch("/api/registration/withdraw", {
        method: "POST",
        body: JSON.stringify({ player_id: pid }),
      });

      const updatedEntries = entries.filter((_, idx) => idx !== indexToRemove);
      setEntries(updatedEntries);

      setSuccessMsg("✅ Entry withdrawn successfully!");
      setTimeout(() => setSuccessMsg(""), 2000);
    } catch (error) {
      alert("❌ Failed to withdraw entry.");
      console.error(error);
    }
  };

  return (
    <div className="container my-entries">
      <h2 className="entries-heading">My Tournament Entries</h2>

      {successMsg && (
        <p style={{ color: "green", textAlign: "center", marginBottom: "1rem", fontWeight: "600" }}>
          {successMsg}
        </p>
      )}

      {loading ? (
        <p className="no-entries">Loading entries...</p>
      ) : entries.length === 0 ? (
        <p className="no-entries">No entries yet for the tournament</p>
      ) : (
        <div className="entries-table-wrapper">
          <div className="entries-table">
            <div className="entry-row header">
              <span>Sr No.</span>
              <span>Tournament Name</span>
              <span>Player Name</span>
              <span>DOB</span>
              <span>Gender</span>
              <span>Withdraw</span>
            </div>
            {entries.map((entry, index) => (
              <div className="entry-row" key={index}>
                <span>{index + 1}</span>
                <span>{entry.tournament_name}</span>
                <span>{entry.player_name}</span>
                <span>{entry.dob}</span>
                <span>{entry.gender}</span>
                <span>
                  <button
                    className="delete-btn"
                    onClick={() => handleRemoveEntry(index, entry.player_id)}
                  >
                    Clear Entry
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEntries;
