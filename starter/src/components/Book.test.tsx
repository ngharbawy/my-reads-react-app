import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Book from './Book';

describe('Book rendering tests', () => {

    it('should render Book ', () => {

        const { container } = render(<Book key={123} id={456} title={'Learn React'} shelf={'Read'} authors={['Richard']} imageLinks={{'smallThumbnail':'','thumbnail':''}}
          emitChangeHandler={() => { }}/>);

        const book= container.getElementsByClassName('book');

        expect(book).toBeDefined();
        expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  
    });

});