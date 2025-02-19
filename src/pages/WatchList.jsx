import { useContext, useEffect, useState } from "react";
import genreMappings from "../Config/GenreConfig";
import { all } from "axios";
import { WatchListContext } from "../App";

function WatchList(props) {
    const WatchListContextValue = useContext(WatchListContext);

  const { watchlist, removeFromWatchList } = WatchListContextValue;

  const genreSet = new Set();

  const [movies, setMovies] = useState(watchlist);

//   const [selectedGenre, setSelectedGenre] = useState(null);



console.log('Watch List Context Value', WatchListContextValue);


  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setMovies(watchlist);
  }, [watchlist]);

  movies.forEach((movie) => {
    const genreId = movie.genre_ids;
    genreId.forEach((id) => {
      genreSet.add(genreMappings[id]);
    });
  });

  const onSearchInputChange = (e) => {
    setSearchValue(e.target.value);
    const filteredMovies = watchlist.filter((movie) => {
      return movie.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setMovies(filteredMovies);
  };
    

  const allGenres = Array.from(genreSet);
  allGenres.unshift("All Genres");
  console.log(allGenres);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);

    // If selected genre exists, filter movies
    if (genre) {
        const filteredMovies = watchlist.filter(movie => 
            movie.genre_ids.includes(genre)
        );
        setMovies(filteredMovies);
    } else {
        // If no genre selected (null), show all movies
        setMovies(watchlist);
    }
}

  return (
    <>
      <div  onClick={() => handleGenreClick(genreId)} className="flex gap-4 justify-center items-center  mt-5">
        {allGenres.map((genre) => {
          return (
            <button className="border-2 rounded-lg border-black px-4 py-2 bg-blue-600 text-white font-bold space-x-8">
              {genre}
            </button>
          );
        })}
      </div>

      <div>
        <input
          onChange={onSearchInputChange}
          value={searchValue}
          type="text"
          placeholder="Search for a movie"
          className="border-2 rounded-lg p-4 m-7 h-8 w-18 border-black px-4 py-2 text-black font-bold space-x-8"
        />
      </div>
      {/* <div className="flex-wrap gap-8 justify-evenly align-center mt-5">
        {movies.map((movieObj) => {
          return movieObj.title;
        })}
      </div> */}
      <div>
        <table className="table-auto w-full m-5">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody className="text-center align-center">
            {movies.map((movie) => {
              return (
                <tr>
                  <td>
                    <img
                      className="h-[70px] w-[70px] object-fit m-1 "
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                  </td>
                  <td>{movie.title}</td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>
                    {movie.genre_ids.map((id) => genreMappings[id]).join(", ")}
                  </td>
                  <td>
                    <button
                      onClick={() => removeFromWatchList(movie)}
                      className="bg-blue-500 text-white p-2 m-2 border-2 border-blue-100 rounded-xl"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
