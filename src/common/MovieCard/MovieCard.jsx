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
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

export default function MovieCard({ movie }) {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreIdList) return [];

    return genreIdList.map(
      (id) => genreData?.find((genre) => genre.id === id).name
    );
  };

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
        <h4>{movie.title}</h4>
        {showGenre(movie.genre_ids)?.map((genre, idx) => (
          <Badge key={idx} bg='danger' className='badge'>
            {genre}
          </Badge>
        ))}
        <div className='card-desc'>
          <div className='rate'>
            <FontAwesomeIcon icon={faStar} className='rate-icon' />
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
