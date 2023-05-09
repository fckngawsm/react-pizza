import React, { useEffect, useState } from "react";

import "../Styles/app.scss";

import Header from "./Header";
import Main from "./Main";
import api from "../utils/api";
function App() {
  const [pizza, setPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api
      .getInitialPizza()
      .then((items) => {
        setPizza(items);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <Main pizzaData={pizza} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
