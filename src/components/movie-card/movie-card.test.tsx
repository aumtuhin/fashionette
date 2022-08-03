import { render, screen } from '@testing-library/react';
import MovieCard from './movie-card';


// assuming getting a movie and details like this mock movie
export const mockMovie = {
    name: 'hello',
    image: {
        medium: 'https://picsum.photos/536/354',
        original: 'example.com'
    },
    rating: {
        average: 9.9,
    },
    genres: ['drama, horror'],
    language: 'english',
    premiered: '2014-09-22',
    summary: 'This is just a summary',
    officialSite: 'official url',

}

test('renders movie name', async () => {
    render(<MovieCard movie={mockMovie} />);
    const name = await screen.findByText(/hello/i);
    expect(name).toBeInTheDocument();
});

test('renders movie thumb', async () => {
    render(<MovieCard movie={mockMovie} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'thumb');
    expect(img).toHaveAttribute('src', mockMovie.image.medium);
});

test('renders movie ratings', async () => {
    render(<MovieCard movie={mockMovie} />);
    const rating = await screen.findByText(/9.9/i);
    expect(rating).toBeInTheDocument();
});


test('renders movie genres', async () => {
    render(<MovieCard movie={mockMovie} />);
    const genres1 = await screen.findByText(/drama/i);
    const genres2 = await screen.findByText(/horror/i);
    expect(genres1).toBeInTheDocument();
    expect(genres2).toBeInTheDocument();
});

test('renders movie summary', async () => {
    render(<MovieCard movie={mockMovie} />);
    const summary = await screen.findByText(/horror/i);
    expect(summary).toBeInTheDocument();
});