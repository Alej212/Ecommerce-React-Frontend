// likeProduct.tsx
import { create } from 'zustand'

type Product = {
  custom_id: string
  image: string
  title: string
  price: string
  genre: string
  type_product: string
}

const $LOCAL_LIKED_KEY = 'product_liked'

const getInitialLiked = () => {
  const liked = localStorage.getItem($LOCAL_LIKED_KEY)
  return liked ? JSON.parse(liked) : []
}

export const useLikeStore = create((set) => ({
  liked: getInitialLiked(),
  toggleLike: (product: Product) => {
    set((state: { liked: Product[] }) => {
      const updatedLiked = [...state.liked]
      const productIndex = updatedLiked.findIndex(
        (p) => p.custom_id === product.custom_id,
      )

      if (productIndex !== -1) {
        // Si el producto ya está en el array, lo eliminamos
        updatedLiked.splice(productIndex, 1)
      } else {
        // Si no está en el array, lo agregamos
        updatedLiked.push(product)
      }

      localStorage.setItem($LOCAL_LIKED_KEY, JSON.stringify(updatedLiked))
      return { liked: updatedLiked }
    })
  },
}))
