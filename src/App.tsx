import placeholder_1 from "./assets/placeholder_1.png";
import placeholder_2 from "./assets/placeholder_2.png";
import placeholder_3 from "./assets/placeholder_3.png";
import Carousel from "react-bootstrap/Carousel";
import Navagation from "./components/Nav.tsx";
import About from "./components/About.tsx";
import Tech from "./components/Tech.tsx";
import Product from "./components/Product.tsx";
import Contact from "./components/Contact.tsx";

function App() {
  return (
    <>
      <Navagation />
      <div id="top">
        <div style={{ paddingTop: 80 }}></div>
        <Carousel>
          {[placeholder_1, placeholder_2, placeholder_3].map((image) => (
            <Carousel.Item key={image}>
              <img src={image} className="w-100" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="px-4">
      <About />
      <Tech />
      <Product />
      <Contact />
      </div>
    </>
  );
}

export default App;
