import { FaStar } from "react-icons/fa";
import "./tournament.css";

const Tournaments = () => {
  return (
    <section className="tourni-section">
   <div className="container tournaments-container">
      <h2 className="Tournament-title">
  Tournaments Info
</h2>

      <div className="tournament-boxes">
        <div className="box">
          <div className="box-header">Current Tournaments</div>
          <ul className="box-list">
            <li><FaStar className="icon" /> <strong style={{fontSize: "21px"}}>Badminton Rules & Regulations</strong></li>
            <li><FaStar className="icon" /><p><strong>Event 1:</strong> Inter-City Tournaments</p></li>
            <li><FaStar className="icon" /><p><strong>Event 2:</strong> High School Boys Age 10–15 Tournaments</p></li>
            <li><FaStar className="icon" /><p><strong>Event 3:</strong> High School All Girls Age 10–15 Tournaments</p></li>
            <li><FaStar className="icon" /><p><strong>Event 4:</strong> Inter-College All Girls Tournaments</p></li>
            <li><FaStar className="icon" /><p><strong>Event 4:</strong> Inter-College Tournaments</p></li>
          </ul>
        </div>

        <div className="box">
          <div className="box-header">News & Upcoming Tournaments</div>
          <ul className="box-list">
            <li>
              <FaStar className="icon" /> 
              <p><strong>Indian shuttlers:</strong> Kidambi Srikanth, Ayush Shetty, and Unnati Hooda advanced to the second round of the Taipei Open 2025, with Unnati Hooda reaching the quarterfinals.</p>
            </li>
            <li>
              <FaStar className="icon" />
              <p>India concluded their Sudirman Cup 2025 campaign with a 3–2 victory over England in their final Group D match.</p>
            </li>
            <li>
              <FaStar className="icon" /><p> <strong>Upcoming Tournament:</strong> Summer Rack Tournaments</p>
            </li>
            <li>
              <FaStar className="icon" /><p> <strong>Upcoming Tournament:</strong> Mid-Summers Tournaments</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Tournaments;
