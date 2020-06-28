import React, { useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import Title from "../title";
import MoviesList from "../moviesList";
import { fetchUpcomingMovies } from "../../store/actions/upcomingActions";
import { fetchLatestMovies } from "../../store/actions/latestActions";
import { fetchNowPlayingMovies } from "../../store/actions/nowPlayingActions";
import "./index.sass";

const MoviesPage = () => {
  const nowPlaying = useSelector((state) => state.nowPlaying.data);
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
        <MoviesList title="Now Playing" movies={nowPlaying} />
      </div>
      <div className="list__wrapper">
        <MoviesList title="Upcoming" movies={upcoming} />
      </div>
      <div className="list__wrapper">
        <MoviesList title="Latest" movies={latest} />
      </div>
      
    </div>
  );
};

export default MoviesPage;
