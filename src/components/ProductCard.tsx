import { useMediaQuery } from "react-responsive";

function ProductCard(props: { title: string; body: string }) {
  const isSmall = useMediaQuery({
    query: "(max-width: 620px)",
  });

  return (
    <div className="card w-100 p-2 d-inline-block" style={{minHeight:(isSmall?270:160)}}>
      <h3 className="card-title">{props.title}</h3>
      <div className="card-body">{props.body}</div>
    </div>
  );
}

export default ProductCard;
