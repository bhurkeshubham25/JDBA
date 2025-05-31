import "./basic.css";
import baddmintondesign from '../../assets/badmintondesign.png'; 

const BadmintonBasics = () => {
  return (
    <section className="badminton-section">
      <div className="container">
        <h1 className="section-title-basic">Badminton Basics</h1>
        <div className="basic-image">
          <div className="badminton-design" >
            <img src={baddmintondesign} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadmintonBasics;