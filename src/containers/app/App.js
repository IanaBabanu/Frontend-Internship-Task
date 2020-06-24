import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MoviesList from "../moviesList";
import MovieItem from "../movieItem";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={MoviesList} />

        <Route path="/details/:id" component={MovieItem} />
      </div>
    </BrowserRouter>
  );
};

export default App;
