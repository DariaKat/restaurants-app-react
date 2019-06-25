import React from "react";
import "./normalize.css";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <div className="header_content">
        <div className="container">
          <div className="header_container-inner">
            <div className="header_logo">
              <a href="#">
                <img src="/images/logo.png" />
              </a>
            </div>
            <nav className="menu">
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">MENU</a>
                </li>
                <li>
                  <a href="#">RESERVATION</a>
                </li>
                <li>
                  <a href="#">RECIPE</a>
                </li>
                <li>
                  <a href="#">BLOG</a>
                </li>
                <li>
                  <a href="#">PAGES</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </nav>
            <button className="header_btn" href="#">
              BOOK YOURTABLE
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
