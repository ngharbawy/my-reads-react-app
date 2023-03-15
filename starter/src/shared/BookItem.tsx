

/** Book Item */
export interface BookItem {

    /** id */
    id: number;

    /** shelf */
    shelf: string;

    /** name */
    title: string;

    /** images */
    imageLinks: Image;

    /** authors */
    authors: string[];

    /** emitChangeHandler */
    emitChangeHandler: (toShelf: string, id: number) => void;

}

/** Image */
export interface Image {
    /** small size image */
    smallThumbnail: string;
    /** normal size image */
    thumbnail: string;
}