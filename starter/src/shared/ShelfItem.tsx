import { BookItem } from "./BookItem";

/** Shelf */
export interface Shelf {

    /** title */
    title: string;

    /** books */
    books: BookItem[];

     /** onChangeHandler */
     emitChangeHandler: (toShelf: string,id: number) => void;
     

}

