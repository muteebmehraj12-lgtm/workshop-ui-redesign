import { useState } from "react";

function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email) {
      setMessage("Please fill all fields");
      return;
    }

    setMessage("Booking confirmed! 🎉");
  };

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
        Book a Workshop
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "14px",
          borderRadius: "10px",
          border: "1px solid #ddd"
        }}
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "14px",
          borderRadius: "10px",
          border: "1px solid #ddd"
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "#2d89ef",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        Confirm Booking
      </button>

      {message && (
        <p style={{
          marginTop: "14px",
          fontWeight: "500",
          color: message.includes("confirmed") ? "green" : "red"
        }}>
          {message}
        </p>
      )}

    </div>
  );
}

export default Booking;