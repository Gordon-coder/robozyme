import "bootstrap/dist/css/bootstrap.css";
import ScrollSpy from "react-scrollspy-navigation";
import logo from "../assets/logo.png"
import { useMediaQuery } from "react-responsive"
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";

function Navagation() {
  const isBig = useMediaQuery({
    query: '(min-width: 800px)'
  })
    return (isBig ? 
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
      :
      <>
      <Navbar expand={false} className="bg-body-tertiary mb-3" fixed="top" style={{height:80}}>
          <Container fluid>
            <Navbar.Brand href="#top"><img src={logo} height="40" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand"
              aria-labelledby="offcanvasNavbarLabel-expand"
              placement="end"
              scroll
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                <img src={logo} height="40" className="ps-3"/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 px-3" variant="underline">
                  <Nav.Link href="#about">About Us</Nav.Link>
                  <Nav.Link href="#tech">Our Technology</Nav.Link>
                  <Nav.Link href="#product">Our Products</Nav.Link>
                  <Nav.Link href="#contact">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </>
    )
}

export default Navagation