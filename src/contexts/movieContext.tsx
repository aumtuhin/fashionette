import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { rootUrl } from '../constants/const';

// interfac of movie context
interface IMovieContext {
    movies: any;
    isLoading: boolean;
}

const defaultState = {
    movies: [],
    isLoading: false,
}


export const MovieContext = createContext<IMovieContext>(defaultState);

// declare props type to avoid error in wrapping up the JSX children in index.tsx
interface props {
    children: JSX.Element | JSX.Element[]
}

export const MovieProvider = ({ children }: props) => {
    const [movies, setMovies] = useState(defaultState.movies);
    const [isLoading, setIsLoading] = useState(defaultState.isLoading);

    async function fetchShows() {
        try {
            setIsLoading(true);
            const response = await axios.get(`${rootUrl}/shows`);
            if (response.status === 200) {
                const data = response.data.slice(0, 12);
                setMovies(data);
            }
            setIsLoading(false);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        //initally fetching some shows to show on home page instead of empty page
        fetchShows();
    }, []);

    return (
        <MovieContext.Provider
            value={{ movies, isLoading }}
        >
            {children}
        </MovieContext.Provider>
    );
};