import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import responsive from '../../../../utils/responsive';
import { Alert, Spinner } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

export default function PopularMoviesSlide() {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    <Spinner animation='border' />;
  }

  if (isError) {
    <Alert variant={'danger'}>{error.message}</Alert>;
  }

  return (
    <div>
      <h3>Popular Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        containerClass='carousel-container'
        itemClass='movie-slider p-1'
        responsive={responsive}
      >
        {data ? data.results.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
        )) : <div />}
      </Carousel>
    </div>
  );
}
