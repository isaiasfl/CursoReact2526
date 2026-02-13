export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  pages: number;
  isbn: string;
  category: string;
  description: string;
  cover: string;
  coverDownloaded: boolean;
}

export interface CreateBookFormState {
  message: string;
  success: boolean;
}
