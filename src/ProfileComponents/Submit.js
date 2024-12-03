import React from "react";
import { useNavigate } from "react-router-dom";

function Submit() {
  const navigate = useNavigate();

  return (
    <div style={styles.submit}>
      <div
        style={styles.submitButtonContainer}
        onClick={() => navigate("/home")}
      >
        <button style={styles.submitButton}>Submit</button>
      </div>
    </div>
  );
}

const styles = {
  submit: {
    marginTop: "20px",
    textAlign: "center",
  },
  submitButtonContainer: {
    position: "absolute", // Fix the button at the bottom
    bottom: "20px", // 20px from the bottom of the screen
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Submit;
