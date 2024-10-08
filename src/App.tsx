import placeholder_1 from "./assets/placeholder_1.png";
import placeholder_2 from "./assets/placeholder_2.png";
import placeholder_3 from "./assets/placeholder_3.png";
import Carousel from "react-bootstrap/Carousel";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav />
      <div style={{ marginTop: 80 }}>
        <div id="top">
          <Carousel>
            {[placeholder_1, placeholder_2, placeholder_3].map((image) => (
              <Carousel.Item>
                <img src={image} className="w-100" />
              </Carousel.Item>
            ))}
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
