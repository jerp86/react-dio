const Item = (props) => {
  return (
    <a
      href="/"
      className="list-group-item list-group-item-action list-group-item-success"
    >
      {props.children}
    </a>
  );
};

export default Item;
