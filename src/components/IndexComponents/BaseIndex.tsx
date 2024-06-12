// import BaseCarousel from './Carousel/BaseCarousel'
import ContentProducts from './Products/ContentProducts'

export default function BaseIndex() {
  return (
    <div className="py-2">
      <div>
        <h2 className="text-2xl font-bold pl-2">Shoes</h2>
        <ContentProducts />
      </div>
      <div>
        <h2 className="text-2xl font-bold pl-2">Shoes</h2>
        <ContentProducts />
      </div>
      <div>
        <h2 className="text-2xl font-bold pl-2">Shoes</h2>
        <ContentProducts />
      </div>
    </div>
  )
}
