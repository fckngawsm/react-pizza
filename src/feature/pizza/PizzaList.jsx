import React from "react";
import Skeleton from "../../Components/Skeleton";
import ItemPizza from "./ItemPizza";
import usePizza from "./use-pizza";

function PizzaList({ searchValue }) {
  const [pizza, status,] = usePizza(searchValue);
  return (
    <div className="content__items">
      {status === "loading"
        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        : pizza.map((pizza, idx) => (
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
