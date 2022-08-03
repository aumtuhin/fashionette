import React from 'react';
import './movie-card.styles.scss';

const MovieCard: React.FC<{ movie: any }> = ({ movie }) => {
    return (
        <div className='movie-card'>
            {movie.name && <h4 className='title'>{movie.name}</h4>}
            {movie.image !== null && <img className='movie-thumb' src={movie.image.medium} alt="thumb" />}
            {movie.rating.average !== null && <div className='rating'>Rating: {movie.rating.average}</div>}
            <div>Language: {movie.language}</div>
            {movie.summary !== null && <p className='summary'>{movie.summary}</p>}
        </div>
    )
}

export default MovieCard;