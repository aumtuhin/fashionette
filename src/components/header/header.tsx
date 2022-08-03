import { ChangeEvent, FormEvent } from 'react';
import Button from '../button/button';
import SearchInput from '../search-input/search-input';
import './header.styles.scss';



const Header = () => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {}
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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