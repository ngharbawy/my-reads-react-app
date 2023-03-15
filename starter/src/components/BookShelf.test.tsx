import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BookShelf from './BookShelf';

describe('BooksShelf rendering tests', () => {


    it('should render BooksShelf component with one book', () => {

        const { container } = render(<BookShelf
            books={[]}
            emitChangeHandler={() => { }}
            title='soft skills'
          ></BookShelf>);

        const mainDiv = container.getElementsByClassName('bookshelf');


        expect(mainDiv).toBeDefined();
        expect(screen.getByText(/soft skills/i)).toBeInTheDocument();
    });

});