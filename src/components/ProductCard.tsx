function ProductCard(props: { title: string; body: string }) {
  return (
    <div className="card w-100 p-2 d-inline-block">
      <h3 className="card-title">{props.title}</h3>
      <div className="card-body">{props.body}</div>
    </div>
  );
}

export default ProductCard;
