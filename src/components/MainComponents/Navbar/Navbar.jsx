import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Style.css";
import Logo from "../../../logo/LogoYellow.png";
import { Link } from "react-router-dom"; 
import {connect} from 'react-redux'
import { login, logOut } from '../../../actions/authActions'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id='navbar' >
          <div className='white-nav-top'>
            <div id='main-nav' className="container">
              <div className="row navbar">
                <div className="col-md-2 text-right">
                  <a>
                    <img src={Logo} alt="logo" />
                  </a>
                </div>

                <div className="col-md-8">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <Link to="/" className="nav-link" >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Share">
                        Share
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                 {this.props.isAuthenticated ? (
            <div id="home-btn" className="col-md-2">
            <Link  to='/' className="btn btn-outline-primary btn-sm" onClick={() => {
                  localStorage.removeItem("token");
                  this.props.logOut()
                }}> 
              Log Out
            </Link>
          </div>
          ) : (
            <div id="home-btn" className="col-md-2">
            <Link  to='/Login' className="btn btn-outline-primary btn-sm" >
              Sign In
            </Link>
          </div>
          )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps,{login,logOut})(Navbar)
