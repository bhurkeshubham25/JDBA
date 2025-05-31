
import "./other.css";
import other1 from "../../assets/other1.jpg";
import other2 from "../../assets/other2.png";
import other3 from "../../assets/other3.png";

const BadmintonAssociations = () => {
  const associations = [
    {
      logo: other1,
      name: "Badminton World Federation",
      description: "The Badminton World Federation (BWF) is the international governing body for the sport of badminton recognised by the International Olympic Committee IOC.",
      link: "#"
    },
    {
      logo: other2,
      name: "Badminton Asia",
      description: "Badminton Asia is the governing body of the badminton sport in Asia under the flagship of Badminton World Federation (BWF).",
      link: "#"
    },
    {
      logo: other3,
      name: "Badminton Association of India",
      description: "Badminton Association of India (BAI) is the governing body of badminton in India.",
      link: "#"
    }
  ];

  return (
    <div className="badminton-associations">
      <div className="container">
        <h1>Other Badminton Associations</h1>
        
        <div className="associations-list">
          {associations.map((association, index) => (
            <div key={index} className="association-card">
              <div className="association-logo">
                <img 
                  src={association.logo} 
                  alt={association.name} 
                  className="logo-image"
                />
              </div>
              <h2>{association.name}</h2>
              <p>{association.description}</p>
              <a href={association.link} className="read-more">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BadmintonAssociations;
