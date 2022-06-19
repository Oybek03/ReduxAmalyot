import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a hre="contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
