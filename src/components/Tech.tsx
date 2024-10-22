import Cry3AaImmobilizationTechnologies from "./Cry3AaImmobilizationTechnologies";
import TraditionalBeadCovalentImmobilizationTechcnologies from "./TraditionalBeadCovalentImmobilizationTechcnologies";

function Tech() {
  return (
    <>
      <div id="tech" className="p-3">
        <div style={{ paddingTop: 20 }}></div>
        <h1 className="text-center">Our Technology</h1>

        <TraditionalBeadCovalentImmobilizationTechcnologies />
        <div className="h-100px"></div>
        <Cry3AaImmobilizationTechnologies />
      </div>
    </>
  );
}

export default Tech;
