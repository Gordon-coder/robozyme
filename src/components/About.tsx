import { useMediaQuery } from "react-responsive"

function About() {
  const isBig = useMediaQuery({
    query: '(min-width: 900px)'
  })

  return (
    <>
      <div id="about" className="p-3">
        <div style={{ paddingTop: 20 }}></div>
        <h1 className="text-center">About Us</h1>
        <section className="d-flex justify-content-center mb-5 mx-2">
          <div className={isBig ? "width-5" : ""}>
              <h4 className="text-center">Who We Are?</h4>
              <br />
              <p className="mx-auto">
                We are a startup focused on developing innovative solutions for
                generating robust, recyclable, and cost-effective enzymes that
                unlock their full potential as catalysts to produce commercially
                viable products.
              </p>
            </div>
            <div className={isBig ? "width-1" : ""}></div>
          <div className={isBig ? "width-6" : "position-absolute"}>placeholder image here</div>
        </section>
        <section className="d-flex justify-content-center">
          <div className={isBig ? "width-6" : "position-absolute"}>placeholder image here</div>
          <div className={isBig ? "width-1" : ""}></div>
          <div className={isBig ? "width-5" : ""}>
              <h4 className="text-center">Our Mission</h4>
              <br />
              <p className="mx-auto">
                Our mission is to harness the power of enzymes to promote green
                sustainable chemical processes for a healthier and cleaner
                world.
              </p>
            </div>
        </section>
      </div>
    </>
  );
}

export default About;
