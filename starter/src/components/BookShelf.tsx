
import { Shelf } from "../shared/ShelfItem";
import Book from "./Book";




const BooksShelf = (props: Shelf) => {

    return (
        
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                {props.books.map((book, i) => <Book key={i} id={book.id} title={book.title} shelf={book.shelf} authors={book.authors} imageLinks={book.imageLinks}
                emitChangeHandler={(toShelf: string, id: number) => {props.emitChangeHandler(toShelf, id)}}/>)}
                </ol>
            </div>
        </div>

    );
}

export default BooksShelf;