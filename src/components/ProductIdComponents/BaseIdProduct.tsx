import BaseInfoProduct from './InfoProduct/BaseInfoProduct'
import BaseRecommendedProducts from './RecommendedProducts/BaseRecommendedProducts'

export default function BaseIdProduct() {
  return (
    <div className="flex flex-col items-center">
      <BaseInfoProduct />
      <BaseRecommendedProducts />
    </div>
  )
}
