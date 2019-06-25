import React from "react";
import "./normalize.css";
import styled from "styled-components";

const StyleFooter = styled.footer`
  background-color: rgba(94, 94, 94, 0.973);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 320px;
  vertical-align: 40px;

  a {
    text-decoration: none;
    display: inline-block;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .container {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .content-all {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .navigation {
    max-width: 500px;
    padding: 0px 20px;
  }

  .content-navig {
    font-size: 18px;
    line-height: 28px;
    padding: 30px 5px 10px 0px;
    font-weight: 600;
    color: white;
  }

  .content-ul a {
    font-size: 16px;
    line-height: 20px;
    font-weight: 100;
    color: rgb(194, 194, 194);
  }

  .content-ul a:hover {
    color: #fea100;
  }

  .news-email {
    margin: 10px 0px 0px 0px;
  }

  .news-text {
    font-size: 18px;
    line-height: 28px;
    padding: 30px 5px 10px 0px;
    font-weight: 600;
    color: white;
  }

  .news-email-text {
    font-size: 16px;
    line-height: 20px;
    font-weight: 100;
    color: rgb(194, 194, 194);
  }

  .news-email-input input {
    padding: 10px 100px 10px 10px;
    margin: 5px 0px;
  }

  .news-email-btn {
    font-family: "Sintony", sans-serif;
    background-color: #fea100;
    color: #fff;
    line-height: 18px;
    margin: 5px;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 14px;
    float: right;
    border: 1px solid transparent;
    border-radius: 5px;
    position: relative;
    height: fit-content;
  }

  .news-email-btn:hover {
    border: 1px solid #ebca93;
  }

  .news-social {
    margin-top: 20px;
  }

  a.facebook {
    background-image: url("/images/facebook.png");
    width: 60px;
    height: 60px;
  }

  a.twitter {
    background-image: url("/images/twitter.png");
    width: 60px;
    height: 60px;
  }

  a.googleplus {
    background-image: url("/images/google.png");
    width: 60px;
    height: 60px;
  }

  .app-text {
    font-size: 18px;
    line-height: 28px;
    padding: 30px 5px 10px 0px;
    font-weight: 600;
    color: white;
  }

  a.appstore {
    background-image: url("/images/appstore2.png");
    width: 222px;
    height: 63px;
  }

  a.googleplay {
    background-image: url("/images/googleplay2.png");
    width: 222px;
    height: 63px;
  }

  .content-text {
    font-size: 14px;
    line-height: 28px;
    padding: 50px 10px 20px 10px;
    text-align: center;
    color: white;
  }
`;

function Footer() {
  return (
    <StyleFooter>
      <div className="content">
        <div className="container">
          <div className="container-inner">
            <div className="content-all">
              <div className="fnavigation">
                <div className="content-navig">Navigation</div>
                <nuv className="content-ul">
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
              <div className="navigation">
                <div className="news-text">News letter</div>
                <div className="news-email">
                  <div className="news-email-text">
                    Enter your email address and subscribe daily newsletter
                  </div>
                  <div className="news-email-input">
                    <input
                      type="text"
                      name="EmailAddress"
                      placeholder="Email Address"
                    />
                    <button className="news-email-btn">SUBSCRIBE</button>
                  </div>
                </div>
                <div className="news-social">
                  <a href="#" className="facebook" />
                  <a href="#" className="twitter" />
                  <a href="#" className="googleplus" />
                </div>
              </div>
              <div className="navigation">
                <div className="app-text">Our app avilable</div>
                <div className="app-btn">
                  <div className="appstore">
                    <a href="#" className="appstore" />
                  </div>
                  <div className="googleplay">
                    <a href="#" className="googleplay" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-text">
              2019© LUXURY RESTAURANT, ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </StyleFooter>
  );
}

export default Footer;
