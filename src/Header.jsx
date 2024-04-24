import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Welcome to my todo app😁</h1>
          <div style={links}>
              <Link to="/">Welcome</Link>
        <Link to="/TodoApp">TodoApp</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
};

// Styles
const headerStyle = {
  color: "#white",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

const links = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  color: "white",
  textDecoration: "none",
};

const titleStyle = {
  fontSize: "2rem",
  margin: "0",
  alignItems: "center",
  display: "flex",
};

export default Header;
