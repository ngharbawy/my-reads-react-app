export const enum BookShelves {
  NONE = "none",
  CURRENTLY_READING = "currentlyReading",
  WANT_TO_READ = "wantToRead",
  READ = "read",
}

export const enum ShelfDisplayNames {
  NONE = 'Move to',
  CURRENTLY_READING = "Currently Reading",
  WANT_TO_READ = "Want to read",
  READ = "Read",
}

export let ShelvesOptions =  [ 
  { value: BookShelves.NONE, label: ShelfDisplayNames.NONE},
  { value: BookShelves.CURRENTLY_READING, label: ShelfDisplayNames.CURRENTLY_READING },
  { value: BookShelves.WANT_TO_READ, label: ShelfDisplayNames.WANT_TO_READ },
  { value: BookShelves.READ, label: ShelfDisplayNames.READ},
];