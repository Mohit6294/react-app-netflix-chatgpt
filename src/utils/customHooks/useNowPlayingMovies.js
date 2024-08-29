import { useDispatch } from "react-redux";
import { OPTIONS } from "../constants";
import { addNowPlayingMovies } from "../movieSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
  //fetch data from TMDB Api , update the store
  const dispatch = useDispatch();

  const getNowPlayingMOvies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTIONS
    );
    const json = await data.json();
  
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMOvies();
  }, []);
};
export default useNowPlaying;
