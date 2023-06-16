import { useDispatch, useSelector } from "react-redux";
import { loadPizza, selectPizzaInfo, selectPizza } from "./pizza-slice";
import { useEffect } from "react";

const usePizza = ({ searchValue }) => {
  const pizza = useSelector(selectPizza);
  const { status } = useSelector(selectPizzaInfo);
  const sortItem = useSelector((state) => state.filter.sort.property);
  const categories = useSelector((state) => state.filter.categoryId);
  console.log(categories)
  const currentPage = useSelector((state) => state.filter.pageCount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPizza({ categories, currentPage, sortItem, searchValue }));
  }, [dispatch, categories, currentPage, searchValue, sortItem]);
  return [pizza, status];
};

export default usePizza;
