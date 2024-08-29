import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../../utils/movieSlice";
import { OPTIONS } from "../../utils/constants";
import { useEffect } from "react";

const useTrailerVideo = (movieId) =>{
  const dispatch = useDispatch();
 

  //fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideos(trailer))
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

}

export default useTrailerVideo;