import React from "react";
import "./normalize.css";
import "./index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="container">
          <div className="footer_container-inner">
            <div className="footer_content-all">
              <div className="footer_navigation">
                <div className="footer_content-navig">Navigation</div>
                <nuv className="footer_content-ul">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Menu</a>
                    </li>
                    <li>
                      <a href="#">Reservation</a>
                    </li>
                    <li>
                      <a href="#">Recipe</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </nuv>
              </div>
              <div className="footer_navigation">
                <div className="footer_news-text">News letter</div>
                <div className="footer_news-email">
                  <div className="footer_news-email-text">
                    Enter your email address and subscribe daily newsletter
                  </div>
                  <div className="footer_news-email-input">
                    <input
                      type="text"
                      name="EmailAddress"
                      placeholder="Email Address"
                    />
                    <button className="footer_news-email-btn">SUBSCRIBE</button>
                  </div>
                </div>
                <div className="footer_news-social">
                  <a href="#" className="facebook" />
                  <a href="#" className="twitter" />
                  <a href="#" className="googleplus" />
                </div>
              </div>
              <div className="footer_navigation">
                <div className="footer_app-text">Our app avilable</div>
                <div className="footer_app-btn">
                  <div className="footer-appstore">
                    <a href="#" className="appstore" />
                  </div>
                  <div className="footer-googleplay">
                    <a href="#" className="googleplay" />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_content-text">
              2019© LUXURY RESTAURANT, ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
