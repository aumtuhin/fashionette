import { render, screen } from '@testing-library/react';
import MovieCard from '../movie-card/movie-card';
import Movies from './movies';
import { mockMovie } from '../movie-card/movie-card.test';


test('renders movie length', async () => {
    render(<Movies />);
    const length = await screen.findByText(/Total/i);
    expect(length).toBeInTheDocument();
});

test('renders movie container', async () => {
    render(<Movies />);
    render(<MovieCard movie={mockMovie} />)
    const length = await screen.findByText(/Total/i);
    const error = await screen.findByText('Oops!! Please try with different name');
    expect(length).toBeInTheDocument();
    expect(error).toBeInTheDocument();
});