import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import OurProducts from "./OurProducts";
import OurTech from "./OurTech";

function Body(props: { active: any }) {
  const active = props.active;
  return (
    <div style={{ padding: 15 }}>
      <div
        id="about"
        className={active === 1 ? "visible" : "invisible position-absolute"}
      >
        <AboutUs />
      </div>
      <div
        id="about"
        className={active === 2 ? "visible" : "invisible position-absolute"}
      >
        <OurTech />
      </div>
      <div
        id="about"
        className={active === 3 ? "visible" : "invisible position-absolute"}
      >
        <OurProducts />
      </div>
      <div
        id="about"
        className={active === 4 ? "visible" : "invisible position-absolute"}
      >
        <ContactUs />
      </div>
    </div>
  );
}

export default Body;
