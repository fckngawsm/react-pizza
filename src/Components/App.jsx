import React, { useEffect, useState } from "react";

import "../Styles/app.scss";

import Header from "./Header";
// import Main from "./Main";
import api from "../utils/api";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
function App() {
  const [pizza, setPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api
      .getInitialPizza()
      .then((items) => {
        setPizza(items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <Routes>
              <Route
                path="/"
                element={<Home pizzaData={pizza} isLoading={isLoading} />}
              />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
