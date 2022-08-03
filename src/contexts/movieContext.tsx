import React, { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { rootUrl } from '../constants/const';

interface IMovieContext {
    movies: any;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setMovies: Dispatch<SetStateAction<any>>;
}

const defaultState = {
    movies: [],
    isLoading: false,
    setIsLoading: () => { return false },
    setMovies: () => { return [] },
}


export const MovieContext = createContext<IMovieContext>(defaultState);

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
            value={{ movies, isLoading, setIsLoading, setMovies }}
        >
            {children}
        </MovieContext.Provider>
    );
};