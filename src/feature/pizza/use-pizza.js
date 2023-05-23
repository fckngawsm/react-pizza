import { useDispatch, useSelector } from "react-redux";
import { loadPizza, selectPizza } from "./pizza-slice";
import { useEffect } from "react";

const usePizza = ({ searchValue }) => {
  const pizza = useSelector(selectPizza);
  const sortItem = useSelector((state) => state.filter.sort.property);
  const categories = useSelector((state) => state.filter.categoryId);
  const currentPage = useSelector((state) => state.filter.pageCount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPizza({categories, currentPage, sortItem, searchValue}));
  }, [dispatch, categories, currentPage, searchValue, sortItem]);
  return pizza;
};

export default usePizza;
