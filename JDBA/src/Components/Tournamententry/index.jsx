import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./tournamententry.css";
import badmintonicon from "../../assets/badmintonicon.jpg";
import { authenticatedFetch } from "../../utils/api";

const TournamentEntry = () => {
  const [category, setCategory] = useState("All");
  const [selectedTournament, setSelectedTournament] = useState("");
  const [playerEntry, setPlayerEntry] = useState({
    player_id: "",
    player_name: "",
    dob: "",
    gender: "",
  });
  const [tournaments, setTournaments] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const inferCategoryFromName = (name) => {
    if (name.toLowerCase().includes("district")) return "District";
    if (name.toLowerCase().includes("state")) return "State";
    if (name.toLowerCase().includes("india")) return "India";
    return "Other";
  };

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const data = await authenticatedFetch("/api/tournament/all");
        const categorized = data.map((t) => ({
          ...t,
          category: inferCategoryFromName(t.name),
        }));
        setTournaments(categorized);
      } catch (err) {
        console.error("Failed to load tournaments:", err);
      }
    };

    fetchTournaments();

    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setPlayerEntry((prev) => ({
        ...prev,
        player_id: userData.player_id || "",
        player_name: userData.full_name || "",
        dob: userData.dob || "",
        gender: userData.gender || "",
      }));
    }
  }, []);

  const filteredTournaments =
    category === "All"
      ? tournaments
      : tournaments.filter((t) => t.category === category);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlayerEntry((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
  const selected = tournaments.find((t) => t.id === parseInt(selectedTournament));
  if (!selected) {
    alert("Please select a valid tournament.");
    return;
  }

  const payload = {
    player_id: playerEntry.player_id,   // ✅ added
    tournament_id: selected.id,
    player_name: playerEntry.player_name,
    dob: playerEntry.dob,
    gender: playerEntry.gender,
  };

  try {
    await authenticatedFetch("/api/registrations/register", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  } catch (err) {
    alert("Submission failed: " + err.message);
  }
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
              <option key={tournament.id} value={tournament.id}>
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

      <div className="player-entry-box">
        <h3>Add Player Entry</h3>
        <div className="player-entry-form">
          <div className="form-group">
            <label>Player ID:</label>
            <input
              type="text"
              name="player_id"
              value={playerEntry.player_id}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Player Name:</label>
            <input
              type="text"
              name="player_name"
              value={playerEntry.player_name}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div className="form-group">
            <label>DOB:</label>
            <input
              type="date"
              name="dob"
              value={playerEntry.dob}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={playerEntry.gender}
              onChange={handleInputChange}
              disabled
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

        {showConfirmation && (
          <p
            style={{
              color: "green",
              fontWeight: "600",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            ✅ Entry submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default TournamentEntry;
