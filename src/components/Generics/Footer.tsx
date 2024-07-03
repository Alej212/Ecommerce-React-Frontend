import { useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  const path = location.pathname.split('/').filter(Boolean)
  console.log(path[0])
  return (
    <div
      className={`${path[0] === 'about' ? '' : 'h-20 bg-gray-900 text-gray-50'}`}
    ></div>
  )
}
