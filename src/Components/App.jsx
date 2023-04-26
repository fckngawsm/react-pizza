import React from "react";

import "../Styles/app.scss";

import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <Main/>
      </div>
    </div>
  );
}

export default App;
