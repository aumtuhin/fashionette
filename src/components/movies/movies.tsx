/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import MovieCard from '../movie-card/movie-card';
import { MovieContext } from '../../contexts/movieContext';
import './movies.styles.scss';

const Movies = () => {
    const { movies, isLoading } = useContext(MovieContext);

    return (
        <div className='movies-section'>
            <div className='movies-container'>
                {isLoading && <div>Loading...</div>}
                {!isLoading && movies.length > 0 && movies.map((movie: any, index: number) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Movies;
