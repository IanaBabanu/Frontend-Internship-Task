import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../store/actions/detailsActions";
import Title from "../title";
import "./index.sass";

const MovieDetails = (props) => {
  const movie = useSelector((state) => state.selectedMovie.data);
  const loading = useSelector((state) => state.selectedMovie.loading);

  const dispatch = useDispatch();

  const movieId = props.match.params.id;

  const changeRating = () => {
    if (movie.popularity !== undefined) {
      return <div>{movie.popularity.toFixed(1)}</div>;
    } else return <div>0</div>;
  };

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  if (loading) return <div>Loading..</div>;
  return (
    <div className="details">
      <Title className="title" title={movie.title} />

      <div className="container">
        <div className="row">
          <div className="col-md-3 cell">
            <div className="category">Title:</div>
            <div>{movie.title}</div>
          </div>
          <div className="col-md-6 cell">
            <div className="category">Description:</div>
            <div>{movie.overview}</div>
          </div>
          <div className="col-md-3 cell">
            <div className="category">Date:</div>
            <div>{movie.release_date}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 cell">
            <div className="category">Genre:</div>
            <ul>
              {(movie.genres || []).map((genre) => (
                <li>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 cell">
            <div className="category">Rating:</div>
            <div>{changeRating()}</div>
          </div>
          <div className="col-md-3 cell">
            <div className="category">Duration:</div>
            <div>{movie.runtime}m</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
