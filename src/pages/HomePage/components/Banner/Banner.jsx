import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';

export default function Banner() {
  const { data } = usePopularMoviesQuery();

  return <div>Banner</div>;
}
