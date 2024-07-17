import React, { useEffect } from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'react-bootstrap';

export default function Banner() {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        <h1>Loading...</h1>;
    }

    if (isError) {
        <Alert variant='danger'>{error.message}</Alert>;
    }

    return (
        <div
            style={{
                backgroundImage:
                    'url(' +
                    `https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${data.results[0].poster_path}` +
                    ')',
            }}
        ></div>
    );
}
