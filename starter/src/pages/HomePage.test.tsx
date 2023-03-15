import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import HomePage from './HomePage';

describe('Home Page test books rendering', () => {

    it('should render Home Page with books content', () => {

        const { container } = render(<HomePage />, { wrapper: BrowserRouter });

        const booksDiv = container.getElementsByClassName('list-books-content');

        expect(booksDiv).toBeDefined();
    });

});