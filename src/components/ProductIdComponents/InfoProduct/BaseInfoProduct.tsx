import { useParams, useSearchParams } from 'react-router-dom'

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
          <button className="bg-gray-900 text-gray-200 py-2 px-6 rounded-md font-semibold">
            buy
          </button>
        </div>
      </div>
    </div>
  )
}
