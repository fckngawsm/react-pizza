import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../feature/filter/Categories";
import Sort from "../feature/filter/Sort";
import Pagination from "../feature/filter/Pagination";
import { setCategoryId, setPagination } from "../feature/filter/filter-slice";
import PizzaList from "../feature/pizza/PizzaList";

function Home({ searchValue }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.filter.categoryId);
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
      <PizzaList searchValue={searchValue} />
      <Pagination onChangePage={(num) => dispatch(setPagination(num))} />
    </div>
  );
}

export default Home;
