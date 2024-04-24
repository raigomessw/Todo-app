import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Welcome to my todo app😁</h1>
      <div className="links">
        <Link className="link-welcome" to="/">
          Welcome
        </Link>
        <Link className="link-todoapp" to="/TodoApp">
          TodoApp
        </Link>
        <Link className="link-about" to="/about">
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
