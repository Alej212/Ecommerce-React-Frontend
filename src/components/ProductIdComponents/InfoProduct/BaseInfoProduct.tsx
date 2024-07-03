import { useParams, useSearchParams } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// JSONS
import jacketsJSON from '../../../JSON/jackets.json'
import shoesJSON from '../../../JSON/shoes.json'
import sweatersJSON from '../../../JSON/sweaters.json'
import pantsJSON from '../../../JSON/pants.json'

type ProductType = 'jackets' | 'shoes' | 'sweaters' | 'pants'

export default function BaseInfoProduct() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') as ProductType
  const [showAlert, setShowAlert] = useState(false)
  const { t } = useTranslation()

  const findProductByIdAndType = (
    id: string | undefined,
    type: ProductType,
  ) => {
    const productsMap = {
      jackets: jacketsJSON,
      shoes: shoesJSON,
      sweaters: sweatersJSON,
      pants: pantsJSON,
    }
    return productsMap[type]?.find((product) => product.custom_id === id)
  }

  const product = findProductByIdAndType(id, type)

  if (!product) {
    return <div>Product not found</div>
  }

  const handleGetNowClick = () => {
    setShowAlert(true) // Mostrar la alerta
    setTimeout(() => {
      setShowAlert(false) // Ocultar la alerta después de 2 segundos (ajusta el tiempo según tus necesidades)
    }, 3000) // 2000 ms = 2 segundos
  }
  return (
    <div className="h-fit w-full bg-none p-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-14">
      <img
        className="bg-gray-300 rounded-md h-80 sm:h-96 w-full sm:w-96 shadow-lg border-3 border-gray-200"
        src={product.image}
      />
      <div className="w-full sm:w-96 text-start">
        <h3 className="text-xl font-semibold mb-7">{product.title}</h3>
        <div className="flex justify-between items-center">
          <p className="relative text-xl font-medium">
            Price: {product.price}
            <span className="absolute font-bold text-sm -top-1 text-gray-800">
              $
            </span>
          </p>
          <button
            onClick={() => handleGetNowClick()}
            className="bg-gray-950 hover:bg-gray-800 text-gray-200 py-2 px-6 rounded-md font-semibold flex gap-2 items-center"
          >
            <p>{t('productID.button')}</p>
            <Icon
              icon="material-symbols:shopping-cart"
              className="h-7 w-7"
            ></Icon>
          </button>
        </div>
      </div>
      <div
        className={`${showAlert ? 'fixed z-20 h-1/3 w-10/12 sm:w-8/12 flex justify-center items-center bg-gray-900 text-white text-center rounded-md shadow-2xl px-4 sm:px-16 uppercase font-medium' : 'hidden'}`}
      >
        {t('productID.message')}
      </div>
    </div>
  )
}
