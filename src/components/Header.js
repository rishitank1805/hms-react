import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <a href="#" className="logo">
            <span>H</span>ealth<span>C</span>are.
          </a>

          <nav className="nav">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="about">about</Link>
              </li>
              <li>
                <Link to="contact">contact</Link>
              </li>
              <li>
                <Link to="#post">Admin Login</Link>
              </li>
            </ul>
          </nav>

          <div className="fas fa-bars"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
