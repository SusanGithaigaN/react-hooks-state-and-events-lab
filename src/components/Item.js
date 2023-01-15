import React, { useState } from "react";

function Item({ name, category }) {
  const [addItems, setAddItems] = useState(false);

  function addToCart(){
    setAddItems((addItems) => !addItems);
  }
  
  return (
    <li className={addItems ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addItems ? "remove" : "add"} onClick={addToCart}>{addItems ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
