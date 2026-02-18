import type { Book } from "../types/book";

const BASE_URL = import.meta.env.VITE_API_BASE_URL; 
const API_URL = `${BASE_URL}/api/books`;
const IMAGES_URL = `${BASE_URL}`;


// Función para obtener la lista de libros

export async function fetchBooks():Promise< Book[] > {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error al obtener los libros");
  }
  return response.json();
}


export async function fetchBookById(id:number):Promise<Book> { 
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Error al obtener el libro con id ${id}`);
  }
  return response.json();
}