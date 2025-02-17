import { useEffect, useState } from "react";
import axios from "axios";

function Banner() {
  const [bannerImg, setBannerImg] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
  );
  const [bannerTitle, setBannerTitle] = useState("Placeholder Image");

  const fetchMovieData = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=48f095fcf409c831f9f990b7c17c047b"
    );
    const randomIndex = getRandomInt(0, 19);
    
    const trendingMovie = response.data.results[randomIndex];
    setBannerImg(
      `https://image.tmdb.org/t/p/original${trendingMovie.backdrop_path}`
    );
    setBannerTitle(
      <h1 className="text-4xl font-bold text-white">{trendingMovie.title}</h1>
    );
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <>
      <div
        className="h-[75vh] bg-center bg-center p-10 m-8"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className=" h-full  flex flex-col items-center justify-end p-10">
          {bannerTitle}
        </div>
      </div>
    </>
  );
}

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
export default Banner;


