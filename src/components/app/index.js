import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MoviesPage from "../moviesPage";
import MovieDetails from "../movieDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MoviesPage} />
      <Route path="/details/:id" component={MovieDetails} />
    </BrowserRouter>
  );
};

export default App;
