import React from 'react'
import Header from './Header'
import useNowPlaying from '../utils/customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../utils/customHooks/usePopularMovies';
import useTopRatedMovies from '../utils/customHooks/useTopRatedMovies';

const Browse = () => {
    useNowPlaying();
    usePopularMovies();
    useTopRatedMovies();
return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse