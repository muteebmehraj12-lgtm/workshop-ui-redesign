import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      padding: "20px",
      fontFamily: "Arial",
      maxWidth: "500px",
      margin: "40px auto"
    }}>

      <h2 style={{
        fontSize: "26px",
        marginBottom: "10px",
        fontWeight: "600"
      }}>
        Explore Workshops
      </h2>

      <p style={{
        color: "#555",
        marginBottom: "30px",
        lineHeight: "1.6"
      }}>
        Discover and book workshops easily with a smooth and user-friendly experience.
      </p>

      <button
        onClick={() => navigate("/workshops")}
        style={{
          width: "100%",
          padding: "14px",
          fontSize: "16px",
          backgroundColor: "#2d89ef",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.12)"
        }}
      >
        View Workshops
      </button>

    </div>
  );
}

export default Home;