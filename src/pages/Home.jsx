import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../feature/filter/Categories";
import Sort from "../feature/filter/Sort";
import ItemPizza from "../Components/ItemPizza";
import Skeleton from "../Components/Skeleton";
import api from "../utils/api";
import Pagination from "../Components/Pagination";
import { setCategoryId, setPagination } from "../feature/filter/filter-slice";

function Home({ searchValue }) {
  const currentPage = useSelector((state) => state.filter.pageCount);
  const [pizza, setPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.filter.categoryId);
  const sortItem = useSelector((state) => state.filter.sort);
  useEffect(() => {
    api
      .getInitialPizza(categories, sortItem, searchValue, currentPage)
      .then((items) => {
        setPizza(items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categories, sortItem, searchValue, currentPage]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categories}
          onClickCategories={(i) => dispatch(setCategoryId(i))}
        />
        <Sort />
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
      <Pagination onChangePage={(num) => dispatch(setPagination(num))} />
    </div>
  );
}

export default Home;
