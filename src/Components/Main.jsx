import React from "react";
import Categories from "./Categories";
import Sort from "./Sort";
import ItemPizza from "./ItemPizza";

// import pizzaData from "../utils/PizzaData.json";

function Main({ pizzaData }) {
  console.log(pizzaData)
  return (
    <div class="content">
      <div class="container">
        <div class="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
          {pizzaData.map((pizza, idx) => (
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
      </div>
    </div>
  );
}

export default Main;
