import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    const response = await axios.get(
                "https://api.themoviedb.org/3/trending/movie/day?api_key=48f095fcf409c831f9f990b7c17c047b");
    const moviesData = response.data.results;
    setLoading(false);
    setMovies(moviesData);
    
  };

  useEffect (() => {
     fetchMovies();
  },[]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
        <div className="font-bold text-4xl text-center"> 
            <h1>Trending Movies</h1>
        </div>
        <div className="flex flex-wrap gap-6 justify-space-evenly align-center p-10">
        {
                    movies.map((movieObj)=>{

                        return <MovieCard movieObj={movieObj} />

                    })
                }
        </div>
       
    </>
  )
}

export default Movies;
