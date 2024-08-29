import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../constants";
import { addTopRatedMovies } from "../movieSlice";

const useTopRatedMovies = () =>{
    //fetch data from TMDB Api , update the store
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      OPTIONS
    );
    const json = await data.json();
  
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;