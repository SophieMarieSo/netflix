import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMoviesSlide from './components/PopularMoviesSlide/PopularMoviesSlide';
import TopRatedMoviesSlide from './components/TopRatedMoviesSlide/TopRatedMoviesSlide';
import UpComingMoviesSlide from './components/UpComingMoviesSlide/UpComingMoviesSlide';

// 1. banner -> popular movie의 첫번째 영화
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
export default function HomePage() {
  return (
    <div>
      <Banner />
      <PopularMoviesSlide />
      <TopRatedMoviesSlide />
      <UpComingMoviesSlide />
    </div>
  );
}
