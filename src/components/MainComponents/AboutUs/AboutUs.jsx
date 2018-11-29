import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AboutUs/Style.css";
import Logo from "../../../logo/LogoRed.png";

const About = () => {
  return (
    <div>
      <div id="about">
        <div className="contact-box-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div id="contact-statement">
                  <h3>About us</h3>
                  <p>
                    {" "}
                    We help people to advice each other <br />
                    this web app allow you to share and get advice <br />
                    from people that you don't know.
                  </p>
                </div>

                <div className="col-md-5">
                  <div id="contact-logo">
                    <a>
                      <img src={Logo} alt="logo" className='image-fluid'/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
