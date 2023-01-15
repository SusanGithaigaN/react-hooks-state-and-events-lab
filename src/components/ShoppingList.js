import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] =useState("All");

  function handleItemList(e){
    setSelectedCategory(e.target.value);
  }

  const itemsOnDisplay = items.filter((item)=>{
    if( selectedCategory === "All") return true;

    return item.category ===selectedCategory;
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleItemList}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsOnDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
