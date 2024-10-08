import logo from "./assets/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import ScrollSpy from "react-scrollspy-navigation";

function Nav() {
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
        </>
    )
}

export default Nav