import { useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'

// JSON
import jacketsJSON from '../../JSON/jackets.json'
import pantsJSON from '../../JSON/pants.json'
import shoesJSON from '../../JSON/shoes.json'
import sweatersJSON from '../../JSON/sweaters.json'

type Product = {
  custom_id: string
  image: string
  title: string
  price: string
  genre: string
  type_product: string
}

type ProductsMap = {
  [key: string]: Product[]
}

type HiddenState = {
  [key: string]: boolean
}

export default function CardViews() {
  const [hidden, setHidden] = useState<HiddenState>({})
  const location = useLocation()
  const path = location.pathname.split('/').filter(Boolean)
  const toggleHidden = (id: string) => {
    setHidden((prevHidden) => ({
      ...prevHidden,
      [id]: !prevHidden[id],
    }))
  }
  const productsMap: ProductsMap = {
    jackets: jacketsJSON,
    pants: pantsJSON,
    shoes: shoesJSON,
    sweaters: sweatersJSON,
  }
  const products = productsMap[path[0]] || []
  return (
    <div className="h-full w-full flex justify-center py-6 px-3">
      <div className="grid grid-cols-3 gap-3">
        {products.map((product: Product) => (
          <div
            key={product.custom_id}
            className="relative flex flex-col gap-2 h-56 bg-gray-50 rounded-md p-2 border border-gray-950 border-opacity-10 shadow-md"
          >
            <div className="h-1/2 w-full flex justify-center">
              <img src={product.image} alt="" className="h-full" />
            </div>
            <button
              onClick={() => toggleHidden(product.custom_id)}
              className="absolute top-0 right-0 text-gray-950 py-1 px-1 rounded-md text-sm font-semibold"
            >
              <Icon
                icon={'ph:heart-bold'}
                fontSize={'1.2rem'}
                className={`${hidden[product.custom_id] ? 'block' : 'hidden'} transition-transform duration-500`}
              ></Icon>
              <Icon
                icon={'ph:heart-fill'}
                fontSize={'1.2rem'}
                className={`${!hidden[product.custom_id] ? 'block' : 'hidden'} transition-transform duration-500`}
              ></Icon>
            </button>
            <div className="h-8 overflow-x-hidden overflow-y-hidden">
              <p className="text-xs font-semibold">{product.title}</p>
            </div>
            <button className="">
              <p className="relative font-medium text-base sm:text-lg">
                {product.price}
                <span className="absolute font-bold text-xs sm:text-sm -top-0 text-gray-800">
                  $
                </span>
              </p>
            </button>
            <button className="bg-gray-900 rounded-sm text-white py-1 flex gap-2 justify-center items-center">
              <p className="font-semibold text-xs sm:text-sm">Get</p>
              <Icon
                icon={'material-symbols:shopping-cart-rounded'}
                fontSize={'1rem'}
              ></Icon>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
