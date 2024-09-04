import React from 'react';
import { useUpComingMoviesQuery } from '../../../../hooks/useUpComingMovies';
import { Alert, Spinner } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

export default function UpComingMoviesSlide() {
  const { data, isLoading, isError, error } = useUpComingMoviesQuery();

  if (isLoading) {
    <Spinner animation='border' />;
  }

  if (isError) {
    <Alert variant={'danger'}>{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider title={'Up Coming Movies'} movies={data} />
    </div>
  );
}
