import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import Button from '../button/button';
import SearchInput from '../search-input/search-input';
import { MovieContext } from '../../contexts/movieContext';
import './header.styles.scss';
import axios from 'axios';
import { rootUrl } from '../../constants/const';

const Header = () => {
    const { setMovies, setIsLoading } = useContext(MovieContext);
    const [query, setQuery] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // preventing page refrershing when submit form
        try {
            setIsLoading(true);
            const response = await axios.get(`${rootUrl}/search/shows?q=${query}`);
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
    return (
        <header className='header'>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <SearchInput
                        placeholder='Name'
                        handleChange={handleChange}
                    />
                    <Button name='Search' />
                </div>
            </form>
        </header>
    )
}

export default Header;