import { useState } from 'react'
import logo from './assets/logo.png'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <nav id="navbar" className="navbar bg-body-tertiary px-3" style={{height:80}}>
        <img src={logo} height="40"/>
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link" href="#about">About Us</a>
          </li>
          <div className="vr"></div>
          <li className="nav-item">
            <a className="nav-link" href="#tech">Our Technology</a>
          </li>
          <div className="vr"></div>
          <li className="nav-item">
            <a className="nav-link" href="#product">Our Products</a>
          </li>
          <div className="vr"></div>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="p-3" tabIndex={0}>
          <div id="about">
            <h2>About Us</h2><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          <div id="tech">
            <h2>Our Technology</h2><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          <div id="product">
            <h2>Our Products</h2><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          <div id="contact">
            <h2>Contact Us</h2><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          .
        </div>
    </>
  )
}

export default App
