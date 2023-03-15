
import { useState, useEffect  } from "react";
import { useLocation } from "react-router-dom";
import BookShelf from "../components/BookShelf";
import { BookItem } from "../shared/BookItem";
import { ShelfDisplayNames, BookShelves } from "../shared/constants";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";




const HomePage = () => {

  const [currentlyReadingBooks, setCurrentlyReadingBooksOnShelf] = useState<BookItem[]>([]);
  const [wantToReadBooks, setWantToReadBooksOnShelf] = useState<BookItem[]>([]);
  const [readBooks, setReadBooksOnShelf] = useState<BookItem[]>([]);
  const [allBooksOnShelves, setAllBooksOnShelves] = useState<BookItem[]>([]);
  const location = useLocation();

      
  const organizeShelfs = (allBooks: BookItem[]) => {
    setAllBooksOnShelves(allBooks);
    setCurrentlyReadingBooksOnShelf(
        allBooks.filter((i) => i.shelf === BookShelves.CURRENTLY_READING)
    );

    setWantToReadBooksOnShelf(allBooks.filter((i) => i.shelf === BookShelves.WANT_TO_READ));

    setReadBooksOnShelf(allBooks.filter((i) => i.shelf === BookShelves.READ));
  };
  
  const reOrderShelfs = (toShelf: string, id: number) => {
    const book = allBooksOnShelves.filter(x => x.id === id)[0];
    const isCurrentlyReadingBook = currentlyReadingBooks.includes(book);
    const isWantToReadBook = wantToReadBooks.includes(book);
    const isReadBook = readBooks.includes(book);

    isCurrentlyReadingBook && setCurrentlyReadingBooksOnShelf(currentlyReadingBooks.filter((i) => i.id !== id));

    isWantToReadBook && setWantToReadBooksOnShelf(wantToReadBooks.filter((i) => i.id !== id));

    isReadBook && setReadBooksOnShelf(readBooks.filter((i) => i.id !== id));

    switch (toShelf) {
        case BookShelves.CURRENTLY_READING:
            currentlyReadingBooks.push(book);
            let clonedCurrReadBooks = [...currentlyReadingBooks];
            setCurrentlyReadingBooksOnShelf(clonedCurrReadBooks);
            break;
        case BookShelves.WANT_TO_READ:
            wantToReadBooks.push(book);
            let clonedWantReadBooks = [...wantToReadBooks];
            setWantToReadBooksOnShelf(clonedWantReadBooks);
            break;
        case BookShelves.READ:
            readBooks.push(book);
            let clonedReadBooks = [...readBooks];
            setReadBooksOnShelf(clonedReadBooks);
            break;
        default:
            return;
    }

    
  };

  useEffect(() => {
    const getAllBooks = async () => {
        const res = await BooksAPI.getAll();
        organizeShelfs(res);
    };

    location.state ?organizeShelfs(location.state.state) :getAllBooks();
    getAllBooks();
}, [location.state]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
        <div className="list-books-content">
          <div>
            <BookShelf
              books={currentlyReadingBooks}
              emitChangeHandler={( newShelf, bookId) => { reOrderShelfs(newShelf, bookId) }}
              title={ShelfDisplayNames.CURRENTLY_READING}
            ></BookShelf>
    
            <BookShelf
              books={wantToReadBooks}
              emitChangeHandler={( newShelf, bookId) => { reOrderShelfs(newShelf, bookId) }}
              title={ShelfDisplayNames.WANT_TO_READ}
            ></BookShelf>

            <BookShelf
              books={readBooks}
              emitChangeHandler={( newShelf, bookId) => { reOrderShelfs(newShelf, bookId) }}
              title={ShelfDisplayNames.READ}
            ></BookShelf>
          </div>
        </div>
      </div>
      <div className="open-search">
            <Link to="/search" >Add a book</Link>
        </div>
    </div>
  );
};
export default HomePage;
