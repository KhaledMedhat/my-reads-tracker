export interface Identifiers {
  identifier: string;
  type: string;
}
export interface ReadingModes {
  text: boolean;
  image: boolean;
}
export interface Images {
  thumbnail: string;
  smallThumbnail: string;
}
export interface Book {
  allowAnOnLogging: boolean;
  authors: string[];
  averageRating: number;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  id: string;
  imageLinks: Images;
  industryIdentifiers: Identifiers[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: boolean;
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  readingModes: ReadingModes;
  shelf: string;
  subtitle: string;
  title: string;
}
export interface BookObject {
  book: Book;
}

export interface SearchData {
  query: string;
  maxResults: number;
}
export interface SearchedBooks {
  books: Book[];
}

export interface UpdatedShelf {
  id: string;
  shelf: string | undefined;
}
