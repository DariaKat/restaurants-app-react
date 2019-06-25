import React from "react";
import "./normalize.css";
import "./index.css";

function Form() {
  return (
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
                      <input type="text" name="Guests" placeholder="Guests*" />
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
  );
}

export default Form;
