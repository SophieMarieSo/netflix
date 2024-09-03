import React from 'react';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import responsive from '../../../../utils/responsive';
import { Alert, Spinner } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './TopRatedMoviesSlide.style.css';

export default function TopRatedMoviesSlide() {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if (isLoading) {
    <Spinner animation='border' />;
  }

  if (isError) {
    <Alert variant={'danger'}>{error.message}</Alert>;
  }

  return (
    <div>
      <div className='title'>Top Rated Movies</div>
      <Carousel
        infinite={true}
        centerMode={true}
        containerClass='carousel-container'
        itemClass='movie-slider p-1'
        responsive={responsive}
      >
        {data ? (
          data.results.map((movie, idx) => (
            <MovieCard key={idx} movie={movie} />
          ))
        ) : (
          <div />
        )}
      </Carousel>
    </div>
  );
}
