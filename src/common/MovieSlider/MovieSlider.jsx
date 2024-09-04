import React from 'react';
import './MovieSlider.style.css';
import responsive from '../../utils/responsive';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieSlider({ title, movies }) {
  return (
    <div>
      <div className='title'>{title}</div>
      <Carousel
        infinite={true}
        centerMode={true}
        containerClass='carousel-container'
        itemClass='movie-slider p-1'
        responsive={responsive}
      >
        {movies ? (
          movies.results.map((movie, idx) => (
            <MovieCard key={idx} movie={movie} />
          ))
        ) : (
          <div />
        )}
      </Carousel>
    </div>
  );
}
