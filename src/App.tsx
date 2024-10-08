import logo from "./assets/logo.png";
import placeholder_1 from "./assets/placeholder_1.png";
import placeholder_2 from "./assets/placeholder_2.png";
import placeholder_3 from "./assets/placeholder_3.png";
import "bootstrap/dist/css/bootstrap.css";
import ScrollSpy from "react-scrollspy-navigation";
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <>
      <nav
        id="navbar"
        className="navbar bg-body-tertiary px-3 fixed-top"
        style={{ height: 80 }}
      >
        <ScrollSpy activeClass="active" offsetTop={80}>
        <a className="nav-link" href="#top">
          <img src={logo} height="40" />
        </a>
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
        <div id="top">
        <Carousel>
      <Carousel.Item>
        <img src={placeholder_1} className="w-100"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={placeholder_3} className="w-100"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={placeholder_3} className="w-100"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
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
