import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h1>Skin Guard Home</h1>
      <p>Welcome User</p>

      <button onClick={() => navigate("/form")}>
        Start Assessment
      </button>
    </div>
  );
}
