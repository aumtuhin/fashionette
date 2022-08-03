import { useContext } from 'react';
import MovieCard from '../movie-card/movie-card';
import { MovieContext } from '../../contexts/movieContext';
import './movies.styles.scss';
import { Movie } from '../../shared/interfaces';

const Movies = () => {
    const { movies, isLoading } = useContext(MovieContext);

    return (
        <div className='movies-section'>
            <div>Total: {movies.length}</div>
            <div className='movies-container'>
                {isLoading && <div>Loading...</div>}
                {!isLoading && movies.length > 0 && movies.map((movie: Movie, index: number) => (
                    <MovieCard key={index} movie={movie} />
                ))}
                {!isLoading && movies.length === 0 && <div>Oops!! Please try with different name</div>}
            </div>
        </div>
    )
}

export default Movies;
