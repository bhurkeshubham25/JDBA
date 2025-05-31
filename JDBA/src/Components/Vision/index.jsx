import "./vision.css";
import Mainslider from '../../assets/Mainslider.jpg';

const Vision = () => {
  return (
    <section 
      className="vision-section" 
      style={{ 
        backgroundImage: `url(${Mainslider})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="vision-content">
          <h2 className="vision-title">Our Vision:</h2>
          <p className="vision-text">
            To become a central hub for badminton activities in<br />
            Jalgaon, nurturing talent and inspiring sportsmanship<br />
            while promoting healthy competition and engagement.
          </p>
          <button className="vision-button">Know More</button>
        </div>
      </div>
    </section>
  )
}

export default Vision;