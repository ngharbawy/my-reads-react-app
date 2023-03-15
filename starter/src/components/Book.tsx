
import { BookItem } from "../shared/BookItem";
import { ShelvesOptions } from "../shared/constants";
import * as BooksAPI from "../BooksAPI";



const Book = (props: BookItem) => {


  const handleBookChange = (event: { target: { value: any; }; }) => {
    
    updateBook(props, event.target.value);
    
  };
  const updateBook = async (book: BookItem, toShelf: string): Promise<void> => {
    await BooksAPI.update(book, toShelf);
    props.emitChangeHandler(toShelf, props.id );
};

    return (
        <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url(${props.imageLinks?.smallThumbnail})`
              }}
            ></div>
            <div className="book-shelf-changer">
            <select placeholder="{state.selectedOption}" value={props.shelf} onChange={handleBookChange}>
            {ShelvesOptions.map(({ value, label }, index) => <option key={index} value={value} >{label}</option>)}
            </select>
            </div>
          </div>
          <div className="book-title">{props.title}</div>

          {props.authors && props.authors.map((author, i) => <div key={i} className="book-authors">{author}</div>)}
        </div>
      </li>

    );
}

export default Book;