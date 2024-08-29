import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../movieSlice";
import { OPTIONS } from "../constants";
import { useEffect } from "react";

const usePopularMovies = () =>{

  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      OPTIONS
    );
    const json = await data.json();
  
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
}
export default usePopularMovies;