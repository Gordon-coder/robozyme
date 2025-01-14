import "bootstrap/dist/css/bootstrap.css"
import "./css/style.css"
import carosel_image_1 from "./assets/carosel_image_1.png"
import placeholder_2 from "./assets/placeholder_2.png"
import placeholder_3 from "./assets/placeholder_3.png"
import Carousel from "react-bootstrap/Carousel"
import Navagation from "./components/Nav.tsx"
import About from "./components/About.tsx"
import Tech from "./components/Tech.tsx"
import Product from "./components/Product.tsx"
import Contact from "./components/Contact.tsx"
import Footer from "./components/Footer.tsx"
import Team from "./components/Team.tsx"

function App() {
  return (
    <>
      <Navagation />
      <div id="space"></div>
      <div id="top">
        <img src={carosel_image_1} className="w-100" />
      </div>
      <About />
      <Tech />
      <Product />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App
