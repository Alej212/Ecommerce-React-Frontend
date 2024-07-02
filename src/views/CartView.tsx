import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTranslation } from 'react-i18next'

// STORES
import { useLikeStore } from '../stores/LikeProducts'

type Product = {
  custom_id: string
  image: string
  title: string
  price: string
  genre: string
  type_product: string
}

export default function CartView() {
  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { liked }: { liked: Product[] } = useLikeStore()
  const { t } = useTranslation()
  return (
    <div className="h-screen">
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-5 px-2">
        {liked.map((product: Product) => (
          <div
            key={product.custom_id}
            className="relative flex flex-col gap-2 h-56 sm:h-64 w-full bg-gray-50 rounded-md p-2 border border-gray-950 border-opacity-10 shadow-md"
          >
            <div className="h-1/2 w-full flex justify-center">
              <img
                src={product.image}
                alt=""
                loading="lazy"
                className="h-full"
              />
            </div>
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
        ))}
      </div>
    </div>
  )
}
