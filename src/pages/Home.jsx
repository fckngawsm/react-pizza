import React from "react";
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import ItemPizza from "../Components/ItemPizza";
import Skeleton from "../Components/Skeleton";

function Home({ pizzaData, isLoading }) {
  console.log(pizzaData);
  return (
    <>
      <div class="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzaData.map((pizza, idx) => (
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
    </>
  );
}

export default Home;
