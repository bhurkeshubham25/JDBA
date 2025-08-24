import { useEffect, useState } from "react";
import "./dashboard.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [user, setUser] = useState(null);

  const tournaments = [
    {
      id: 1,
      name: "YONEX India Opens 2025",
      startDate: "25-06-2025",
      endDate: "29-06-2025",
      daysLeft: 3,
      category: "india",
    },
    {
      id: 2,
      name: "VICTORY Pune Junior College",
      startDate: "25-06-2025",
      endDate: "29-06-2025",
      daysLeft: 3,
      category: "district",
    },
    {
      id: 3,
      name: "Double Bats Bangalore 2025",
      startDate: "25-06-2025",
      endDate: "29-06-2025",
      daysLeft: 3,
      category: "state",
    },
    {
      id: 4,
      name: "VICTORY Rajasthan Junior College",
      startDate: "25-06-2025",
      endDate: "29-06-2025",
      daysLeft: 3,
      category: "state",
    },
    {
      id: 5,
      name: "Palghar District Tournament",
      startDate: "25-06-2025",
      endDate: "29-06-2025",
      daysLeft: 3,
      category: "district",
    },
  ];

  const filteredTournaments =
    selectedCategory === "all"
      ? tournaments
      : tournaments.filter((t) => t.category === selectedCategory);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/player/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setUser(data.player);
        } else {
          console.error("Failed to fetch user:", data.message);
        }
      } catch (err) {
        console.error("Error fetching dashboard:", err.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container dashboard-wrapper">
      <div className="profile-section">
        <div className="photo-box">
          {user?.profile_image ? (
            <img
              src={`http://localhost:5000/uploads/${user.profile_image}`}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "15px",
                objectFit: "cover",
              }}
            />
          ) : (
            <p>No Image</p>
          )}
        </div>
        <h2>{user?.first_name || "Loading..."}</h2>

        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">Player ID -</p>
          <p>{user?.playerId || "-"}</p>
        </div>

        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">BAI ID -</p>
          <p>{user?.bai_id || "Not Provided"}</p>
        </div>

        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">Email -</p>
          <p>{user?.email || "-"}</p>
        </div>

        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">Aadhar Card No -</p>
          <p>{user?.aadhar_number || "-"}</p>
        </div>

        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">Contact No -</p>
          <p>{user?.mobile_number || "-"}</p>
        </div>

        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">Birth Date -</p>
          <p>{user?.dob?.substring(0, 10) || "-"}</p>
        </div>

        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">MBA ID -</p>
          <p>{user?.mba_id || "-"}</p>
        </div>
      </div>

      <div className="tournament-section">
        <h2 className="tournament-title">Upcoming Tournaments</h2>

        <div className="filter-types">
          {["all", "india", "state", "district"].map((cat) => (
            <label key={cat}>
              <input
                type="radio"
                name="type"
                value={cat}
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
              />
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          ))}
        </div>

        <table className="tournament-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Tournaments Names</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Day Left</th>
            </tr>
          </thead>
          <tbody>
            {filteredTournaments.map((t, index) => (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td>{t.name}</td>
                <td>{t.startDate}</td>
                <td>{t.endDate}</td>
                <td>{t.daysLeft}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
