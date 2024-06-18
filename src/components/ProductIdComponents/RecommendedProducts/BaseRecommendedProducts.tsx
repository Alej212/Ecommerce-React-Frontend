import { useSearchParams } from 'react-router-dom'
import ContentProducts from '../../IndexViewComponents/Products/ContentProducts'

export default function BaseRecommendedProducts() {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') ?? ''
  return (
    <div className="w-full py-3">
      <h3 className="text-lg font-bold text-center pb-3">
        Recommended Products
      </h3>
      <ContentProducts type={type} />
    </div>
  )
}
