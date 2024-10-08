import { useState } from "react";
import logo from "./assets/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import ScrollSpy from "react-scrollspy-navigation";

function App() {
  return (
    <>
      <nav
        id="navbar"
        className="navbar bg-body-tertiary px-3 fixed-top"
        style={{ height: 80 }}
      >
        <a className="nav-link" href="#">
          <img src={logo} height="40" />
        </a>
        <ScrollSpy activeClass="active" offsetTop={80}>
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <div className="vr"></div>
            <li className="nav-item">
              <a className="nav-link" href="#tech">
                Our Technology
              </a>
            </li>
            <div className="vr"></div>
            <li className="nav-item">
              <a className="nav-link" href="#product">
                Our Products
              </a>
            </li>
            <div className="vr"></div>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </ScrollSpy>
      </nav>
      <div style={{ marginTop: 80 }}>
        <div id="about" className="p-3">
          <h2>About Us</h2>
        </div>
        <div id="tech" className="p-3">
          <h2>Our Technology</h2>
        </div>
        <div id="product" className="p-3">
          <h2>Our Products</h2>
        </div>
        <div id="contact" className="p-3">
          <h2>Contact Us</h2>
        </div>
      </div>
    </>
  );
}

export default App;
