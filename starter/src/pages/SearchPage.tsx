import { useEffect, useState } from "react";
import { BookItem } from "../shared/BookItem";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";
import { Link } from "react-router-dom";

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState<BookItem[]>([]);
    const [searchKey, setSearchKey] = useState("");
    
  useEffect(() => {
    const searchForBooks = async (query: string) => {
        const results = await BooksAPI.search(query, 50);
        results.length > 0 && setSearchResult(results);
      };
      searchKey ? searchForBooks(searchKey) : setSearchResult([]);
    }, [searchKey]);


      const updateBook = async (book: BookItem, toShelf: string): Promise<void> => {
        await BooksAPI.update(toShelf, book);
    };

    return(
        <div className="search-books">
        <div className="search-books-bar">
        <Link
          className="close-search"
          to="/" state={{ state : searchResult }}
        >
          Close
        </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
         {searchResult.length > 0 ? 
         searchResult.map((book, i) => <Book key={i} id={book.id} title={book.title} shelf={book.shelf} authors={book.authors} imageLinks={book.imageLinks} 
         emitChangeHandler={(toShelf: string, id: number) => {updateBook( book, toShelf)}}/>) : <div>No search results</div>
              
        }
          </ol>
        </div>
      </div>
    )
}


export default SearchPage;