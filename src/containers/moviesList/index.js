import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNowPlayingMovies, fetchLatestMovies } from "../../actions";
import Title from "../title";
import "./index.sass";

const MoviesList = (props) => {
  const movies = useSelector((state) => state.movies.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, [dispatch]);

  console.log("movies", movies);
  return (
    <div className="list">
      <Title title="Cinema" />
      <div className="list__wrapper">
        <div className="list__title">Now Playing</div>

        {movies.map((movie) => (
          <Link to={`/details/${movie.id}`}>
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.id}
              style={{
                width: "120px",
                height: "170px",
                border: "1px solid white",
                margin: "0 7px",
              }}
            />
          </Link>
        ))}
      </div>
      <div className="list__wrapper">
        <div className="list__title">Latest</div>

        {movies.map((movie) => (
          <Link to={`/details/${movie.id}`}>
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.id}
              style={{
                width: "120px",
                height: "170px",
                border: "1px solid white",
                margin: "0 7px",
              }}
            />
          </Link>
        ))}
      </div>
      <div className="list__wrapper">
        <div className="list__title">Upcoming</div>

        {movies.map((movie) => (
          <Link to={`/details/${movie.id}`}>
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.id}
              style={{
                width: "120px",
                height: "170px",
                border: "1px solid white",
                margin: "0 7px",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
