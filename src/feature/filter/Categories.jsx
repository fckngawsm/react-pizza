import React from "react";
import { initialStateCategories } from "../../utils/categories";

function Categories({ value, onClickCategories }) {
  return (
    <div className="categories">
      <ul>
        {initialStateCategories.map((categories, idx) => (
          <li
            key={idx}
            onClick={() => onClickCategories(idx)}
            className={value === idx ? "active" : ""}
          >
            {categories}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
