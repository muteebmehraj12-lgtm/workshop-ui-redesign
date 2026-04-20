import { useNavigate } from "react-router-dom";

function Workshops() {
  const navigate = useNavigate();

  const workshops = [
    { title: "Python Basics", date: "20 Aug 2026", location: "Online" },
    { title: "Web Development", date: "25 Aug 2026", location: "Delhi" },
    { title: "AI & Machine Learning", date: "30 Aug 2026", location: "Bangalore" }
  ];

  return (
    <div style={{
      padding: "20px",
      maxWidth: "500px",
      margin: "20px auto",
      fontFamily: "Arial"
    }}>
      
      <h2 style={{
        marginBottom: "20px",
        fontSize: "24px"
      }}>
        Available Workshops
      </h2>

      {workshops.map((workshop, index) => (
        <div
          key={index}
          style={{
            padding: "18px",
            marginBottom: "18px",
            borderRadius: "14px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
          }}
        >
          <h3 style={{ marginBottom: "8px" }}>
            {workshop.title}
          </h3>

          <p style={{ margin: "5px 0", color: "#555" }}>
            📅 {workshop.date}
          </p>

          <p style={{ margin: "5px 0", color: "#555" }}>
            📍 {workshop.location}
          </p>

          <button
            onClick={() => navigate("/booking")}
            style={{
              marginTop: "12px",
              padding: "12px",
              width: "100%",
              backgroundColor: "#2d89ef",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Book Now
          </button>
        </div>
      ))}

    </div>
  );
}

export default Workshops;