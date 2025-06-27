import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./tournamententry.css";
import badmintonicon from "../../assets/badmintonicon.jpg";

const TournamentEntry = () => {
  const [category, setCategory] = useState("All");
  const [selectedTournament, setSelectedTournament] = useState("");
  const [playerEntry, setPlayerEntry] = useState({
    playerId: "",
    playerName: "",
    dob: "",
    gender: "",
  });

  const tournaments = [
    { id: 1, name: "YONEX India Opens 2025", category: "India" },
    { id: 2, name: "VICTORY Pune Junior College", category: "District" },
    { id: 3, name: "Double Bats Bangalore 2025", category: "State" },
    { id: 4, name: "VICTORY Rajasthan Junior College", category: "State" },
    { id: 5, name: "Palghar District Tournament", category: "District" },
  ];

  const filteredTournaments =
    category === "All"
      ? tournaments
      : tournaments.filter(
          (t) => t.category.toLowerCase() === category.toLowerCase()
        );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlayerEntry((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
  if (
    !selectedTournament ||
    !playerEntry.playerId.trim() ||
    !playerEntry.playerName.trim() ||
    !playerEntry.dob.trim() ||
    !playerEntry.gender.trim()
  ) {
    alert("Please fill all the details before submitting.");
    return;
  }

  const submittedEntry = {
    tournament: selectedTournament,
    ...playerEntry,
  };

  const existingEntries = JSON.parse(localStorage.getItem("tournamentEntries")) || [];
  localStorage.setItem("tournamentEntries", JSON.stringify([...existingEntries, submittedEntry]));

  alert("Entry submitted successfully!");

  setPlayerEntry({
    playerId: "",
    playerName: "",
    dob: "",
    gender: "",
  });
};


  return (
    <div className="container tournament-entry">
      <h2 className="heading">Tournament Entry</h2>

      <div className="filter-section">
        <label className="filter-label">Select Tournament</label>
        <div className="radio-group">
          {["All", "India", "State", "District"].map((cat) => (
            <label key={cat} className="radio-label">
              <input
                type="radio"
                name="tournament-category"
                value={cat}
                checked={category === cat}
                onChange={() => {
                  setCategory(cat);
                  setSelectedTournament("");
                }}
              />
              <span className="custom-radio" />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div className="tournament-box">
        <h3>Tournament List</h3>
        <div className="custom-select-wrapper">
          <select
            value={selectedTournament}
            onChange={(e) => setSelectedTournament(e.target.value)}
          >
            <option value="">Select Tournament</option>
            {filteredTournaments.map((tournament) => (
              <option key={tournament.id} value={tournament.name}>
                {tournament.name}
              </option>
            ))}
          </select>
          <FaChevronDown className="dropdown-icon" />
        </div>

        <div className="tournament-details">
          <h4>Tournaments Details</h4>
          <p>
            {selectedTournament
              ? `Displaying details for "${selectedTournament}"`
              : "Displaying Selected Tournaments Details"}
          </p>
        </div>
      </div>

      {/* Shuttle Icons */}
      <div className="shuttles">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={badmintonicon}
            alt="Shuttle"
            className="shuttle-icon"
          />
        ))}
      </div>

      {/* Player Entry Section */}
      <div className="player-entry-box">
        <h3>Add Player Entry</h3>
        <div className="player-entry-form">
          <div className="form-group">
            <label>Player ID:</label>
            <input
              type="text"
              name="playerId"
              value={playerEntry.playerId}
              onChange={handleInputChange}
              disabled={!selectedTournament}
            />
          </div>
          <div className="form-group">
            <label>Player Name:</label>
            <input
              type="text"
              name="playerName"
              value={playerEntry.playerName}
              onChange={handleInputChange}
              disabled={!selectedTournament}
            />
          </div>
          <div className="form-group">
            <label>DOB:</label>
            <input
              type="date"
              name="dob"
              value={playerEntry.dob}
              onChange={handleInputChange}
              disabled={!selectedTournament}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={playerEntry.gender}
              onChange={handleInputChange}
              disabled={!selectedTournament}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <FaChevronDown className="dropdown-icon" />
          </div>
        </div>

        <div className="submit-entry">
          <button onClick={handleSubmit} disabled={!selectedTournament}>
            Send Entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentEntry;
