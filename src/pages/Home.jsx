import React, { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import ItemPizza from "../Components/ItemPizza";
import Skeleton from "../Components/Skeleton";
import api from "../utils/api";

function Home({ searchValue }) {
  console.log(searchValue);
  const [pizza, setPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState(0);
  const [sortItem, setSortItem] = useState({
    name: "популярности",
    property: "rating",
  });
  useEffect(() => {
    api
      .getInitialPizza(categories, sortItem, searchValue)
      .then((items) => {
        setPizza(items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categories, sortItem, searchValue]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categories}
          onClickCategories={(i) => setCategories(i)}
        />
        <Sort value={sortItem} onClickSort={(i) => setSortItem(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
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
    </div>
  );
}

export default Home;
