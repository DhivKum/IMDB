// import Movies from "./Movies";
import { WatchListContext } from "../App";
import { useContext } from "react";

function MovieCard({movieObj}) {

    const WatchListContextValue = useContext(WatchListContext);
  const { watchlist, addToWatchList, removeFromWatchList } = WatchListContextValue;

  let moviePoster = movieObj.backdrop_path;
  let movieTitle = movieObj.title;
  const moviePosterUrl = `https://image.tmdb.org/t/p/original${moviePoster}`;
  let isMovieInWatchList = watchlist.find((watchListMovie) => { return  watchListMovie.id === movieObj.id });

  return (
    <>
      <div
        style={{ backgroundImage: `url(${moviePosterUrl})` }}
        className="w-64 h-96 bg-cover bg-center rounded-lg hover:scale-105 hover:cursor-pointer"
      >
        {!isMovieInWatchList ? (
          <div onClick={() => addToWatchList(movieObj)} className="h-[20px] w-[20px]" >
            &#128525;
          </div>
        ) : (
          <div onClick={() => removeFromWatchList(movieObj)} className="h-[20px] w-[20px]">
            &#10060;
          </div>
        )}
        <div className="h-full flex  text-2xl flex-col justify-end p-4 pb-7 text-white rounded-lg">
          {movieTitle}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
