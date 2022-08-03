import { render, screen } from '@testing-library/react';
import Footer from './footer';

test('renders footer', async () => {
    render(<Footer />);
    const footerElement = await screen.findByText(/Made with by Tuhin/i);
    expect(footerElement).toBeInTheDocument();
});