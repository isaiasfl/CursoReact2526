import type { use } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

const BookCard = () => {
  const { agregarFavorito } = use(FavoritesContext)
  return (
    <div>BookCard</div>
  )
}

export default BookCard