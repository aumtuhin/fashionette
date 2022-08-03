import React from 'react';
import './movie-card.styles.scss';
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Movie } from '../../shared/interfaces';

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
    // to remove the html tags from summary, api serves html template rather than plain text as movie summary
    const regex = /(<([^>]+)>)/ig;
    return (
        <div className='movie-card'>
            {movie.name && <h4 className='title'>{movie.name}</h4>}
            {movie.image !== null && <img className='movie-thumb' src={movie.image.medium} alt="thumb" />}
            {movie.image === null && <img className='movie-thumb' src='https://assets.nflxext.com/us/boxshots/hd1080/81034936.jpg' alt='thumb' />}
            {movie.rating.average !== null && <div className='rating'>Rating: {movie.rating.average}</div>}
            {movie.rating.average === null && <div className='rating'>Rating: No rating</div>}
            {movie.genres.length > 0 && <div className='genres'>{movie.genres.slice(0, 2).map((genre: string, index: number) => (
                <p className='genre' key={index}>{genre}</p>
            ))}</div>}
            <div>Language: {movie.language}</div>
            {movie.premiered !== null && <div>Premiered: {movie.premiered}</div>}
            {movie.summary !== null && <p className='summary'>{movie.summary.replace(regex, "").slice(0, 100)} ...</p>}
            {movie.officialSite !== null && <a href={movie.officialSite} target="_blank" rel="noreferrer"><ChevronRightIcon className='icon' /></a>}
            {movie.officialSite === null && <p>No official site</p>}
        </div>
    )
}

export default MovieCard;