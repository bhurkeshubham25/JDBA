import { useEffect, useState } from "react";
import "./dashboard.css";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [user, setUser] = useState({
    name: "",
    playerId: "",
    biaId: "",
    email: "",
    aadhar: "",
    contact: "",
    birthDate: "",
    mbaId: ""
  });

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
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
    
      setUser({
        name: "Shubham Burkhe",
        playerId: "jdba001",
        biaId: "BIA0001",
        email: "ShubhamBurkhe012@gmail.com",
        aadhar: "500025325543",
        contact: "9876543210",
        birthDate: "14/01/1999",
        mbaId: "MBA0001"
      });
    }
  }, []);

  return (
   <div className="container dashboard-wrapper">
      <div className="profile-section">
        <div className="photo-box">
          <FaPlus className="plus-icon" />
        </div>
        <h2>{user.name || "Shubham Burkhe"}</h2>
        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">Player ID -</p>
          <p>{user.playerId || "jdba001"}</p>
        </div>
        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">BAI ID -</p>
          <p>{user.baiId || "Not Provided"}</p>
        </div>
        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">Email -</p>
          <p>{user.email || "example@email.com"}</p>
        </div>
        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">Aadhar Card No -</p>
          <p>{user.aadhar || "************"}</p>
        </div>
        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">Contact No -</p>
          <p>{user.phone || "**********"}</p>
        </div>
        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">Birth Date -</p>
          <p>{user.dob || "DD-MM-YYYY"}</p>
        </div>
        <div className="profile-detail">
          <div className="arrow-icon">
            <IoIosArrowDroprightCircle />
          </div>
          <p className="profile-info">MBA ID -</p>
          <p>{user.mbaId || "********"}</p>
        </div>
        <div className="profile-btn">
          <button className="edit-btn">Edit Profile</button>
          <button className="changepassword-btn">Change Password</button>
        </div>
      </div>

      <div className="tournament-section">
        <h2 className="tournament-title">Upcoming Tournaments</h2>

        <div className="filter-types">
          <label>
            <input
              type="radio"
              name="type"
              value="all"
              checked={selectedCategory === "all"}
              onChange={() => setSelectedCategory("all")}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="india"
              checked={selectedCategory === "india"}
              onChange={() => setSelectedCategory("india")}
            />
            India
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="state"
              checked={selectedCategory === "state"}
              onChange={() => setSelectedCategory("state")}
            />
            State
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="district"
              checked={selectedCategory === "district"}
              onChange={() => setSelectedCategory("district")}
            />
            District
          </label>
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
