import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function Movies(props) {

    const {watchlist, addToWatchList, removeFromWatchList} = props;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);

  const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=48f095fcf409c831f9f990b7c17c047b&page=${pageNo}`
    );
    const moviesData = response.data.results;
    setLoading(false);
    setMovies(moviesData);
  };

  useEffect(() => {
    fetchMovies();
  }, [pageNo]);

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrev = () => {
    if (pageNo > 1) setPageNo(pageNo - 1);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="font-bold text-4xl text-center">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex flex-wrap gap-8 justify-evenly align-center mt-5">
        {movies.map((movieObj) => {
          return <MovieCard movieObj={movieObj} watchlist={watchlist} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} />;
        })}
      </div>
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        pageNo={pageNo}
      />
    </>
  );
}

export default Movies;
