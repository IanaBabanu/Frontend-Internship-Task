import React from "react";
import { Link } from "react-router-dom";

const MoviesList = (props) => {
  return (
    <div>
      <div className="list__title">{props.title}</div>

      {props.movies.map((movie) => (
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
  );
};

export default MoviesList;
