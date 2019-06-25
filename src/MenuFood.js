import React from "react";
import "./normalize.css";
import "./index.css";

function MenuFood() {
  return (
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
                  <div className="menu_food-price-title">Toasted jam copy</div>
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
                  <div className="menu_food-price-title">Toasted jam copy</div>
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
  );
}
export default MenuFood;
