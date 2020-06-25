import React, { useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchNowPlayingMovies,
  fetchLatestMovies,
  fetchUpcomingMovies,
} from "../../actions";
import Title from "../title";
import "./index.sass";

const MoviesList = (props) => {
  const movies = useSelector((state) => state.nowPlaying.data);
  const latest = useSelector((state) => state.latest.data);
  const upcoming = useSelector((state) => state.upcoming.data);

  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(fetchNowPlayingMovies());
      dispatch(fetchLatestMovies());
      dispatch(fetchUpcomingMovies());
    });
  }, [dispatch]);

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
        <div className="list__title"> Upcoming</div>

        {upcoming.map((movie) => (
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

        {latest.map((movie) => (
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
