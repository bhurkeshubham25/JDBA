import "./marquee.css";
import { IoStar } from "react-icons/io5";

const Marquee = () => {
  const message = (
    <>
      <span><IoStar className="marquee-icon" /> All the Upcoming events that are about to happen in 2025-26 </span>
      <span><IoStar className="marquee-icon" /> All the Upcoming events that are about to happen in 2025-26 </span>
      <span><IoStar className="marquee-icon" /> All the Upcoming events that are about to happen in 2025-26 </span>
    </>
  );

  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-track">
          {message}
          {message}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
