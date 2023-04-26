import React, { useState } from "react";
import { initialStateCategories } from "../utils/categories";

function Categories() {
  const [activeCategories, setActiveCategories] = useState(0);

  return (
    <div className="categories">
      <ul>
        {initialStateCategories.map((categories, idx) => (
          <li
            key={idx}
            onClick={() => setActiveCategories(idx)}
            className={activeCategories === idx ? "active" : ""}
          >
            {categories}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
