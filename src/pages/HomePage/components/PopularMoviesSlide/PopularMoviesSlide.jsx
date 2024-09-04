import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert, Spinner } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

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
      <MovieSlider title={'Popular Movies'} movies={data} />
    </div>
  );
}
