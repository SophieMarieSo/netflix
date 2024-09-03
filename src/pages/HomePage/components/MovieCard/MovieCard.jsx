import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCircleExclamation,
  faUserGroup,
  faShieldHeart,
} from '@fortawesome/free-solid-svg-icons';

export default function MovieCard({ movie }) {
  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
          ')',
      }}
      className='movie-card'
    >
      <div className='overlay'>
        <h3>{movie.title}</h3>
        {movie.genre_ids.map((genre, idx) => (
          <Badge key={idx} bg='danger' className='badge'>
            {genre}
          </Badge>
        ))}
        <div className='card-desc'>
          <div>
            <FontAwesomeIcon icon={faStar} className='movie-rate' />
            {movie.vote_average.toFixed(1)}
          </div>
          <div className='popularity'>
            <FontAwesomeIcon icon={faUserGroup} />
            {Math.round(movie.popularity)}
          </div>
          <div>
            {movie.adult ? (
              <div className='adult'>
                <FontAwesomeIcon icon={faCircleExclamation} />
                <div>19+</div>
              </div>
            ) : (
              <div className='all'>
                <FontAwesomeIcon icon={faShieldHeart} />
                <div>ALL</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
