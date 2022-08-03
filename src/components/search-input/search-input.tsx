import { ChangeEvent } from 'react';
import './search-input.styles.scss';

interface Props {
    placeholder: string, 
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<Props> = ({ placeholder, handleChange }) => {
    return (
        <input
            className='search-input'
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            required
        />
    )
}

export default SearchInput;