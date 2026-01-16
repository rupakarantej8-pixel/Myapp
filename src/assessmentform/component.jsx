import React from "react";
import { useNavigate } from "react-router-dom";

export default function AssessmentForm() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Assessment Form</h2>

      <button onClick={() => navigate("/result")}>
        Submit
      </button>
    </div>
  );
}
