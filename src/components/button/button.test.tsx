import { render, screen } from '@testing-library/react';
import Button from './button';

test('renders button name', async () => {
    render(<Button name='search'/>);
    const buttonElement = await screen.findByText(/search/i);
    expect(buttonElement).toBeInTheDocument();
});