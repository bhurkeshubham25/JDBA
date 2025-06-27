import { useEffect, useState } from "react";
import "./myentries.css";

const MyEntries = () => {
  const [entries, setEntries] = useState([]);

  // Load entries from localStorage or initialize demo data
  useEffect(() => {
    const stored = localStorage.getItem("tournamentEntries");
    if (stored) {
      setEntries(JSON.parse(stored));
    } else {
      // Demo data for testing
      const demo = [
        {
          tournament: "YONEX India Opens 2025",
          playerName: "Aarav Sharma",
          dob: "2005-08-10",
          gender: "Male",
        },
        {
          tournament: "Palghar District Tournament",
          playerName: "Riya Patel",
          dob: "2007-01-22",
          gender: "Female",
        },
      ];
      setEntries(demo);
      localStorage.setItem("tournamentEntries", JSON.stringify(demo));
    }
  }, []);

  // Handler to remove one entry
  const handleRemoveEntry = (indexToRemove) => {
    const updatedEntries = entries.filter((_, idx) => idx !== indexToRemove);
    setEntries(updatedEntries);
    localStorage.setItem("tournamentEntries", JSON.stringify(updatedEntries));
  };

  return (
    <div className="container my-entries">
      <h2 className="entries-heading">My Tournament Entries</h2>

      {entries.length === 0 ? (
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
                <span>{entry.tournament}</span>
                <span>{entry.playerName}</span>
                <span>{entry.dob}</span>
                <span>{entry.gender}</span>
                <span>
                  <button
                    className="delete-btn"
                    onClick={() => handleRemoveEntry(index)}
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
