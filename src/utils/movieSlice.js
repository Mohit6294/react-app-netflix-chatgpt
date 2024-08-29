import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state,action) =>{
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state,action) =>{
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state,action) =>{
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state,action) =>{
      state.topRatedMovies = action.payload;
    }
  }
});

export const {addNowPlayingMovies,addTrailerVideos,addPopularMovies,addTopRatedMovies} = movieSlice.actions;

export default movieSlice.reducer;
