import ContentProducts from './Products/ContentProducts'

export default function BaseIndex() {
  return (
    <div className="py-3">
      <div>
        <h2 className="text-2xl font-bold pl-2">Shoes</h2>
        <ContentProducts type="shoes" />
      </div>
      <div>
        <h2 className="text-2xl font-bold pl-2">Sweaters</h2>
        <ContentProducts type="sweaters" />
      </div>
      <div>
        <h2 className="text-2xl font-bold pl-2">Jackets</h2>
        <ContentProducts type="jackets" />
      </div>
    </div>
  )
}
