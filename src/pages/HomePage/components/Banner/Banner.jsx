import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert, Spinner } from 'react-bootstrap';
import './Banner.style.css';

export default function Banner() {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <Spinner animation='border' variant="danger" />;
  }

  if (isError) {
    return <Alert variant={'danger'}>{error.message}</Alert>;
  }

  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${data?.results[0].poster_path}` +
          ')',
      }}
      className='banner'
    >
      <div className='text-white desc'>
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
}
