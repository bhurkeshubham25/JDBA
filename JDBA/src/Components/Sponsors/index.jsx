import "./sponsor.css";
import sponsor1 from '../../assets/sponsor1.png';
import sponsor2 from '../../assets/sponsor2.png';
import sponsor3 from '../../assets/sponsor3.png';
import sponsor4 from '../../assets/sponsor4.png';

const Sponsors = () => {
  return (
    <div className="sponsor-container">
      <section className="sponsors-section">
        <div className="container">
          <h2 className="sponsors-title">Our Sponsors</h2>
          <div className="sponsor-grid">
            {/* Main Sponsor */}
            <div className="sponsor-card">
              <div className="logo-container">
                <img src={sponsor1} alt="Jain Irrigation Systems Ltd." className="sponsor-logo" />
              </div>
              <p className="sponsor-label">Main Sponsor</p>
            </div>

            {/* Co-Sponsor 1 */}
            <div className="sponsor-card">
              <div className="logo-container">
                <img src={sponsor2} alt="BHAVARLAI AND KANTABAI JAIN FOUNDATION" className="sponsor-logo" />
              </div>
              <p className="sponsor-label">Co-Sponsor</p>
            </div>

            {/* Co-Sponsor 2 */}
            <div className="sponsor-card">
              <div className="logo-container">
                <img src={sponsor3} alt="Mind Body Soul" className="sponsor-logo" />
              </div>
              <p className="sponsor-label">Co-Sponsor</p>
            </div>

            {/* Our Supporter */}
            <div className="sponsor-card">
              <div className="logo-container">
                <img src={sponsor4} alt="ANUBHUTI SCHOOL" className="sponsor-logo" />
              </div>
              <p className="sponsor-label">Our Supporter</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;