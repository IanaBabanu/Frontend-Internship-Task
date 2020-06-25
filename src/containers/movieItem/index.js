import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../actions";
import Title from "../title";
import "./index.sass";

const MovieItem = (props) => {
  const movie = useSelector((state) => state.selectedMovie.data);
  const loading = useSelector((state) => state.selectedMovie.loading);

  const dispatch = useDispatch();

  const movieId = props.match.params.id;

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  // console.log("movie", movie);
  // console.log("loading", loading);

  if (loading) return <div>Loading..</div>;
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
            <ul>
              {/* {movie.genres.map((genre) => (
                <li>{genre.name}</li>
              ))} */}
            </ul>
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
