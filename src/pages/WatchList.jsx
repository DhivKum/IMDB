import { useState } from "react";
import genreMappings from "../Config/GenreConfig";
import { all } from "axios";

function WatchList(props) {
  const { watchlist } = props;

  const genreSet = new Set();

  const [movies, setMovies] = useState(watchlist);

  movies.forEach((movie) => {
    const genreId = movie.genre_ids;
    genreId.forEach((id) => {
      genreSet.add(genreMappings[id]);
    });
  });

  const allGenres = Array.from(genreSet);
  allGenres.unshift("All Genres");
  console.log(allGenres);

  return (
    <>
      <div className="flex gap-4 justify-center items-center  mt-5">
        {allGenres.map((genre) => {
          return (
            <button className="border-2 rounded-lg border-black px-4 py-2 bg-blue-600 text-white font-bold space-x-8">
              {genre}
            </button>
          );
        })}
      </div>

      <div className="flex-wrap gap-8 justify-evenly align-center mt-5">
        {movies.map((movieObj) => {
          return movieObj.title;
        })}
      </div>
    </>
  );
}

export default WatchList;
