import React from "react";
//import backIcon from "../Assets/arrow.png";
import logout from "../Assets/logout.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <div style={styles.rightSection} onClick={() => navigate("/login")}>
        <img src={logout} alt="Logout Icon" style={styles.logoutIcon} />{" "}
        <button style={styles.logoutButton}>Log out</button>{" "}
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#306C71",
    color: "#fff",
    height: "70px",
  },
  rightSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px", // Space between the icon and the text
  },
  logoutIcon: {
    width: "40px", // Size of the logout icon
    height: "40px",
    marginRight: "150px",
  },
  logoutButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "white", // Matching color for "Log out" text
    cursor: "pointer",
    fontSize: "16px", // Smaller font size for "Log out"
    marginRight: "150px",
  },
};

export default Header;
