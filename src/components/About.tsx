function About() {
  return (
    <>
      <div id="about" className="p-3">
        <div style={{ paddingTop: 80 }}></div>
        <h2 className="text-center">About Us</h2>
        <section className="d-flex justify-content-evenly mb-5">
          <div className="w-50">
            <div className="w-75 m-auto">
              <h4 className="text-center">Who We Are?</h4>
              <br />
              <p className="ms-5">
                We are a startup focused on developing innovative solutions for
                generating robust, recyclable, and cost-effective enzymes that
                unlock their full potential as catalysts to produce commercially
                viable products.
              </p>
            </div>
          </div>
          <div className="w-50">placeholder image here</div>
        </section>
        <section className="d-flex justify-content-evenly">
          <div className="w-50">placeholder image here</div>
          <div className="w-50">
            <div className="w-75 m-auto">
              <h4 className="text-center">Our Mission</h4>
              <br />
              <p className="me-5">
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
