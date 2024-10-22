import arrow_down from "../assets/arrow_down.svg";

function TraditionalBeadCovalentImmobilizationTechnologies() {
    return (
        <>
        <h4>Traditional Bead Covalent Immobilization Technologies</h4>
          {[
            ["Expression", ""],
            ["Sonication", ""],
            ["Protein Purification", ""],
            ["Concentration", "Bead Activation"],
          ].map((item) => (
            <div key={item[0]}>
              <section className="d-flex justify-content-center mx-2">
                <div className="width-6">
                  <p className="process">{item[0]}</p>
                </div>
                <div className="width-6">
                  {item[1] == "" ? <></> : <p className="process">{item[1]}</p>}
                </div>
              </section>
              <section className="d-flex justify-content-center mx-2">
                <div className="width-6 text-center">
                  <img src={arrow_down} className="" height={40} />
                </div>
                <div className="width-6 text-center">
                  {item[1] == "" ? (
                    <></>
                  ) : (
                    <img src={arrow_down} className="" height={40} />
                  )}
                </div>
              </section>
            </div>
          ))}
          <section className="d-flex justify-content-center mx-2">
            <div className="width-10">
              <p className="process">Enzyme Coupling</p>
            </div>
          </section>
          <section className="d-flex justify-content-center mx-2">
            <div className="width-10 text-center">
              <img src={arrow_down} className="" height={40} />
            </div>
          </section>
          <section className="d-flex justify-content-center mx-2">
            <div className="width-10">
              <p className="process">Washing</p>
            </div>
          </section>
        </>
    )
}

export default TraditionalBeadCovalentImmobilizationTechnologies