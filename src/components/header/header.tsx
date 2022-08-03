import { ChangeEvent, FormEvent, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import Button from '../button/button';
import SearchInput from '../search-input/search-input';
import './header.styles.scss';

const Header = () => {
    const [query, setQuery] = useState<string>('');
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // preventing page refrershing when submit form
        navigate({
            pathname: 'search/shows',
            search: createSearchParams({
                q: query
            }).toString()
        });
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