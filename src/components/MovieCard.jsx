// import Movies from "./Movies";

function MovieCard(props) {
    const {movieObj} = props;
    let moviePoster = movieObj.backdrop_path; 
    let movieTitle = movieObj.title;
    const moviePosterUrl = `https://image.tmdb.org/t/p/original${moviePoster}`;

  return (
    <>
    <div style={{backgroundImage: `url(${moviePosterUrl})`}} className="w-64 h-96 bg-cover bg-center rounded-lg ">
    <div className="h-full flex  text-2xl flex-col justify-end p-4 text-white rounded-lg">
            {movieTitle} 
        </div>
    </div>
    </>
  )
}

export default MovieCard