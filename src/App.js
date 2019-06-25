import React from "react";
import "./normalize.css";
import "./index.css";

function App() {
  return (
    <React.Fragment>
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
              <a className="header_btn" href="#">
                BOOK YOURTABLE
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="slider">
        <div className="container">
          <div className="slider_inner">
            <div className="slider_item">
              <div className="slider_item-content">
                <div className="slider_title">
                  <p className="slider_title-p">Taste your fav dish </p>
                  <p>from luxury restaurant.</p>
                </div>
                <div className="slider_text">Call us and book your table</div>
                <a href="tel:1008005006" className="slider_phone">
                  1-008 005 006
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="opening">
        <div className="container">
          <div className="opening_inner">
            <div className="opening-item">
              <div className="opening_hours">Opening hours</div>
            </div>
            <div className="opening-item">
              <div className="opening_title">Manday to Friday</div>
              <div className="opening_text">10am-10pm</div>
            </div>
            <div className="opening-item">
              <div className="opening_title">Saturday to Sunday</div>
              <div className="opening_text">09am-11pm</div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu_food">
        <div className="container">
          <div className="menu_food_inner">
            <div className="menu_food_title">Food Menu</div>
            <nuv className="munu_food-item">
              <ul>
                <li>
                  <a href="#">
                    <img src="/images/all.png" />
                    <p>All</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/break.png" />
                    <p>Breakfast</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/lunch.png" />
                    <p>Lunch</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/snaks.png" />
                    <p>Snaks</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/Pizza.png" />
                    <p>Pizza</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/soups.png" />
                    <p>Soups</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/dinner.png" />
                    <p>Dinner</p>
                  </a>
                </li>
              </ul>
            </nuv>
            <div className="menu_food-price">
              <div className="menu_food-price-left">
                <div className="menu_food-price-eat">
                  <div className="menu_food-price-name">
                    <div className="menu_food-price-title">
                      Ultimate organic fruit salad
                    </div>
                    <div className="menu_food-price-text">
                      survived not only five centuries but the leap
                    </div>
                  </div>
                  <div className="menu_food-price-dol">$50.00</div>
                </div>
                <div className="menu_food-price-eat">
                  <div className="menu_food-price-name">
                    <div className="menu_food-price-title">Plain pancakes</div>
                    <div className="menu_food-price-text">
                      Donec eget augue at diam euismod viverra
                    </div>
                  </div>
                  <div className="menu_food-price-dol">$68.00</div>
                </div>
                <div className="menu_food-price-eat">
                  <div className="menu_food-price-name">
                    <div className="menu_food-price-title">Toasted jam</div>
                    <div className="menu_food-price-text">
                      Phasellus a ex accumsan, sollicitudin
                    </div>
                  </div>
                  <div className="menu_food-price-dol">$22.00</div>
                </div>
                <div className="menu_food-price-eat">
                  <div className="menu_food-price-name">
                    <div className="menu_food-price-title">
                      Toasted jam copy
                    </div>
                    <div className="menu_food-price-text">
                      Phasellus a ex accumsan, sollicitudin copy
                    </div>
                  </div>
                  <div className="menu_food-price-dol">$39.00</div>
                </div>
              </div>
              <div className="menu_food-price-right">
                <div className="menu_food-price-eat">
                  <div className="menu_food-price-name">
                    <div className="menu_food-price-title">
                      Ultimate organic fruit salad
                    </div>
                    <div className="menu_food-price-text">
                      survived not only five centuries but the leap
                    </div>
                  </div>
                  <div className="menu_food-price-dol">$50.00</div>
                </div>
                <div className="menu_food-price-eat">
                  <div className="menu_food-price-name">
                    <div className="menu_food-price-title">Plain pancakes</div>
                    <div className="menu_food-price-text">
                      Donec eget augue at diam euismod viverra
                    </div>
                  </div>
                  <div className="menu_food-price-dol">$68.00</div>
                </div>
                <div className="menu_food-price-eat">
                  <div className="menu_food-price-name">
                    <div className="menu_food-price-title">Toasted jam</div>
                    <div className="menu_food-price-text">
                      Phasellus a ex accumsan, sollicitudin
                    </div>
                  </div>
                  <div className="menu_food-price-dol">$22.00</div>
                </div>
                <div className="menu_food-price-eat">
                  <div className="menu_food-price-name">
                    <div className="menu_food-price-title">
                      Toasted jam copy
                    </div>
                    <div className="menu_food-price-text">
                      Phasellus a ex accumsan, sollicitudin copy
                    </div>
                  </div>
                  <div className="menu_food-price-dol">$39.00</div>
                </div>
              </div>
            </div>
            <div className="menu_food-btn">
              <button>EXPLOR FOOD MENU</button>
            </div>
          </div>
        </div>
      </section>

      <section className="form">
        <div className="container">
          <div className="form_inner">
            <div className="form_content">
              <div className="form_title">Reserve your table</div>
              <div className="form_box">
                <form>
                  <div className="form_box-inner">
                    <div className="form_box-left">
                      <div className="form_box-div">
                        <input type="text" name="Name" placeholder="Name*" />
                      </div>
                      <div className="form_box-div">
                        <input type="text" name="Time" placeholder="Time*" />
                      </div>
                      <div className="form_box-div">
                        <input
                          type="text"
                          name="Guests"
                          placeholder="Guests*"
                        />
                      </div>
                    </div>

                    <div className="form_box-right">
                      <div className="form_box-div">
                        <input type="text" name="Email" placeholder="Email" />
                      </div>
                      <div className="form_box-div">
                        <input type="text" name="Date" placeholder="Date*" />
                      </div>
                      <div className="form_box-div">
                        <input type="text" name="Phone" placeholder="Phone*" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="form-btn">
                <button>MAKE RESERVATION</button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      <button className="footer_news-email-btn">
                        SUBSCRIBE
                      </button>
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
    </React.Fragment>
  );
}

export default App;
