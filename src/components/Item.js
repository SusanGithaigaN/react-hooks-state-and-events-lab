import React, { useState } from "react";

function Item({ name, category }) {
  const [addItems, setAddItems] = useState(false);

  function addToCart(){
    setAddItems((addItems) =>!addItems)
  }
 
  const itemsInCart = addItems ? "in-cart" : "";
  return (
    <li className={itemsInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{itemsInCart ? "Remove from" : "Add to"} cart</button>
    </li>
  );
}

export default Item;
