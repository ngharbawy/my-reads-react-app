import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import SearchPage from './SearchPage';

describe('Search Page test renderng', () => {

    it('should render Search Page content', () => {

        const { container } = render(<SearchPage />, { wrapper: BrowserRouter });
        const mainDiv = container.getElementsByClassName('search-books');
        expect(mainDiv).toBeDefined();

    });

});