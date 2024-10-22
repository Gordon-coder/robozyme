import arrow_down from "../assets/arrow_down.svg";

function Cry3AaImmobilizationTechnologies() {
    return (
        <>
        <h4>Cry3Aa Immobilization Technologies</h4>
          {[
            "Expression + Immobilization",
            "Autolysis + Centrifugation"
          ].map((item) => (
            <div key={item}>
              <section className="d-flex justify-content-center mx-2">
                <div className="width-10">
                  <p className="process">{item}</p>
                </div>
              </section>
              <section className="d-flex justify-content-center mx-2">
                <div className="width-10 text-center">
                  <img src={arrow_down} className="" height={40} />
                </div>
              </section>
            </div>
          ))}
          <section className="d-flex justify-content-center mx-2">
            <div className="width-10">
              <p className="process">Washing</p>
            </div>
          </section>
        </>
    )
}

export default Cry3AaImmobilizationTechnologies