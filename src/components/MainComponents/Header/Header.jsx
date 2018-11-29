import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <div id="header">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">

                <div id="header-statement" className="text-left">
                  <h2>start sharing</h2>
                  <h3> No matter your problem, tell us now!</h3>
                </div>
                
                <Link to="Share">
                <div id="header-btn">
                
                  <a className="btn btn-outline-secondary" href="#">
                    Click Here
                  </a>
                </div>
                </Link>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
