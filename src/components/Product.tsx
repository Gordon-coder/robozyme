import ProductCard from "./ProductCard";
import { useState } from "react";

function Product() {
  let products = [
    { title: "Putrescine (1,4-diaminebutane)", body: "Polyamide precursors" },
    { title: "L-tert-leucine", body: "Chiral precursor for tumor-fighting agents/anti-HIV protease inhibitors" },
    { title: "Ethyl (R)-3-hydoxybutanoate (R-EHB): ", body: "Chiral intermediate for pharmaceutic active ingredients, such as L-carnitine, (R)-4-amino-3-hydroxybutyric acid, GABOB" },
  ];

  let [index, setIndex] = useState(0);
  return (
    <>
      <div id="product" className="p-3">
        <div style={{ paddingTop: 20 }}></div>
        <h1 className="text-center">Our Products</h1>
        <div className="d-flex justify-content-center">
        <button onClick={()=>(setIndex((index==0)?products.length-1:index-1))} className="width-1">{"<"}</button>
          <ProductCard
            title={products[index].title}
            body={products[index].body}
          />
        <button onClick={()=>(setIndex((index==products.length-1)?0:index+1))} className="width-1">{">"}</button>
      </div></div>
    </>
  );
}

export default Product;
