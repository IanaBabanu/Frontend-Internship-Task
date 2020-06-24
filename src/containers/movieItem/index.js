import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../actions";
import Title from "../title";
import "./index.sass";

const MovieItem = (props) => {
  const movie = useSelector((state) => state.selectedMovie.data);

  const dispatch = useDispatch();

  const movieId = props.match.params.id;

  let genres = [];

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  console.log("genres", movie.genres);

  return (
    <div className="details">
      <Title className="title" title={movie.title} />

      <div className="container">
        <div className="row">
          <div className="col-md-3 cell">
            Title:
            <div>{movie.title}</div>
          </div>
          <div className="col-md-6 cell">
            Description:
            <div>{movie.overview}</div>
          </div>
          <div className="col-md-3 cell">
            Date:
            <div>{movie.release_date}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 cell">
            Genre:
            <ul></ul>
          </div>
          <div className="col-md-3 cell">
            Rating:
            <div>{movie.popularity}</div>
          </div>
          <div className="col-md-3 cell">
            Duration:
            <div>{movie.runtime}m</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
