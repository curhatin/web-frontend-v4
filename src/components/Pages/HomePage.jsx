import React, { Component } from "react";
import Navbar from "../MainComponents/Navbar/Navbar";
import Header from "../MainComponents/Header/Header";
import About from "../MainComponents/AboutUs/AboutUs";
import Contact from "../MainComponents/Contact/Contact";
import Footer from "../MainComponents/Footer/Footer";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Header />
        <About />
        <Contact />
        <Footer />
      
      </div>
    );
  }
}

export default HomePage;
