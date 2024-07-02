import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useLikeStore } from '../../../stores/LikeProducts'
import { useTranslation } from 'react-i18next'

type Product = {
  custom_id: string
  image: string
  title: string
  price: string
  genre: string
  type_product: string
}

export default function Card({ product }: { product: Product }) {
  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { liked, toggleLike } = useLikeStore()
  const { t } = useTranslation()
  return (
    <div className="h-full w-full py-4 px-2">
      <div className="relative flex flex-col gap-2 h-full w-full bg-gray-50 rounded-md p-2 border border-gray-950 border-opacity-10 shadow-md">
        <div className="h-1/2 w-full flex justify-center">
          <img src={product.image} alt="" loading="lazy" className="h-full" />
        </div>
        <button
          onClick={() => toggleLike(product)}
          className="absolute top-0 right-0 py-1 px-1 text-sm font-semibold"
        >
          <Icon
            icon={'ph:heart-fill'}
            fontSize={'1.2rem'}
            className={`${!liked.some((likedProduct: { custom_id: string }) => likedProduct.custom_id === product.custom_id) ? 'block' : 'hidden'} transition-transform duration-500 text-gray-400`}
          ></Icon>
          <Icon
            icon={'ph:heart-fill'}
            fontSize={'1.2rem'}
            className={`${liked.some((likedProduct: { custom_id: string }) => likedProduct.custom_id === product.custom_id) ? 'block' : 'hidden'} transition-transform duration-500 text-gray-950`}
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
        <Link
          to={`/product/${product.custom_id}?type=${product.type_product}`}
          className="bg-gray-900 rounded-sm text-white py-1 flex gap-2 justify-center items-center"
        >
          <p className="font-semibold text-xs sm:text-sm">
            {t('card.buttonAdd')}
          </p>
          <Icon
            icon={'material-symbols:shopping-cart-rounded'}
            fontSize={'1rem'}
          ></Icon>
        </Link>
      </div>
    </div>
  )
}
