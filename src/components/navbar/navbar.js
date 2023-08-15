import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <header>
      <h1>The Adam Blog</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>
            <a
              href="http://localhost:3002"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manage
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navbar;
