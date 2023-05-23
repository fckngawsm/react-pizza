import React from "react";
import ItemPizza from "../../Components/ItemPizza";
import usePizza from "./use-pizza";

function PizzaList({ searchValue }) {
  const pizza = usePizza(searchValue);
  return (
    <div className="content__items">
      {pizza.map((pizza, idx) => (
        <ItemPizza
          key={idx}
          title={pizza.title}
          price={pizza.price}
          image={pizza.imageUrl}
          sizes={pizza.sizes}
          types={pizza.types}
        />
      ))}
    </div>
  );
}

export default PizzaList;
