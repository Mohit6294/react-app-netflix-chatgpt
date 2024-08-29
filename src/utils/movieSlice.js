import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state,action) =>{
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state,action) =>{
      state.trailerVideo = action.payload;
    }
  }
});

export const {addNowPlayingMovies,addTrailerVideos} = movieSlice.actions;

export default movieSlice.reducer;
