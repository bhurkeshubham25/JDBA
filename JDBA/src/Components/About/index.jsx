import "./about.css";
import aboutimage from '../../assets/aboutimage.jpg';

const About = () => {
  return (
    <div>
       <div className="container about-section">
      <div className="about-content">
        <div className="about-text">
         <h2 className="section-title">About JDBA</h2>
          <h3>Who We Are:</h3>
          <p>
            The Jalgaon District Badminton Association (<span className="jdba-highlight">JDBA</span>) is a passionate organization committed to the growth, promotion, and excellence of badminton throughout the Jalgaon district. We strive to nurture talent at the grassroots level while also supporting competitive players as they progress through regional and national stages.
          </p>
          <p>
            Our mission is to empower players, coaches, and enthusiasts by providing the tools, training, events, and infrastructure needed to elevate the standard of badminton in our region. From organizing district-level tournaments to facilitating coaching clinics and community outreach, we aim to make badminton accessible, inclusive, and thriving across all age groups and skill levels.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutimage} alt="Badminton player" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;
