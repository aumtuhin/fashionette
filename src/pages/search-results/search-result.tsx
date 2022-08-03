import { useContext, useEffect } from 'react';
import Movies from '../../components/movies/movies';
import axios from 'axios';
import { rootUrl } from '../../constants/const';
import './search-results.styles.scss';
import { MovieContext } from '../../contexts/movieContext';
import { useLocation, } from 'react-router-dom';

const SearchResults = () => {
    const { setMovies, setIsLoading } = useContext(MovieContext);

    // getting query string with useLocation hook
    const { search } = useLocation();

    async function searchShows() {
        try {
            setIsLoading(true);
            const response = await axios.get(`${rootUrl}/search/shows${search}`);
            if (response.status === 200) {
                const data = response.data.slice(0, 12);
                //only get the shows from the array
                const movies = data.map((item: any) => item.show);
                setMovies(movies);
            }
            setIsLoading(false);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        searchShows();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (
        <div>
            <Movies data-testid='app-movies' />
        </div>
    )
}

export default SearchResults;
