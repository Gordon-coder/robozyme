import { useMediaQuery } from "react-responsive"

function About() {
  const isBig = useMediaQuery({
    query: '(min-width: 800px)'
  })

  return (
    <>
      <div id="about" className="p-3">
        <div style={{ paddingTop: 20 }}></div>
        <h1 className="text-center">About Us</h1>
        <section className="d-flex justify-content-evenly mb-5">
          <div className={isBig ? "w-50" : "w-100"}>
            <div className="w-75 m-auto">
              <h4 className="text-center">Who We Are?</h4>
              <br />
              <p className={isBig ? "ms-5" : "w-75 mx-auto"}>
                We are a startup focused on developing innovative solutions for
                generating robust, recyclable, and cost-effective enzymes that
                unlock their full potential as catalysts to produce commercially
                viable products.
              </p>
            </div>
          </div>
          <div className={isBig ? "w-50" : "position-absolute"}>placeholder image here</div>
        </section>
        <section className="d-flex justify-content-evenly">
          <div className={isBig ? "w-50" : "position-absolute"}>placeholder image here</div>
          <div className={isBig ? "w-50" : "w-100"}>
            <div className="w-75 m-auto">
              <h4 className="text-center">Our Mission</h4>
              <br />
              <p className={isBig ? "me-5" : "w-75 mx-auto"}>
                Our mission is to harness the power of enzymes to promote green
                sustainable chemical processes for a healthier and cleaner
                world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
