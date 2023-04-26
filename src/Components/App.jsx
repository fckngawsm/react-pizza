import React from "react";

import "../Styles/app.scss";

import Header from "./Header";
import Categories from "./Categories";
import Sort from "./Sort";
import ItemPizza from "./ItemPizza";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <ItemPizza />
              <ItemPizza />
              <ItemPizza />
              <ItemPizza />
              <ItemPizza />
              <ItemPizza />
              <ItemPizza />
              <ItemPizza />
              <ItemPizza />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
