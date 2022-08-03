import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import SearchInput from './search-input';

test("input should change", async () => {
    render(<SearchInput placeholder='Name' handleChange={() => { }} />);
    userEvent.type(screen.getByPlaceholderText('Name'), 'hello')

    await waitFor(() => {
        expect(screen.getByPlaceholderText('Name')).toHaveValue('hello');
    });
});