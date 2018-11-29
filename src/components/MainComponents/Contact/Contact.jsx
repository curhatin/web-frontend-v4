import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import "../Contact/Style.css";


const Contact = () => {
  return (
    <div>
      <div id="contact">
        <div id="contact-box">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div id="contact-info">
                  <h4>....................</h4>
                  <p>
                    We help you to release the stress and <br />
                    get proper advice. don’t be hesitate <br />
                    your identity won't be recognized, <br />
                    be relax and share your problem!{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div id="contact-connect">
                  <h4> connect with us</h4>
                  <p>
                    {" "}
                    info@curhatin.net
                    <br />
                    <br />
                    +628588092233 <br />
                    Jl. Kemang Utara. Jakarta Selatan{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div id="contact-update">
                  <h4> stay update </h4>
                  <p>
                    {" "}
                    career <br />
                    blog
                  </p>
                  <div id="update-icons">
                    <a>
                    <FontAwesomeIcon icon={faInstagram} size='5x' className='update-icon'/> 
                    <FontAwesomeIcon icon={faFacebook} size='5x' className='update-icon'/>
                    <FontAwesomeIcon icon={faTwitter} size='5x' className='update-icon'/>
                    </a>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
