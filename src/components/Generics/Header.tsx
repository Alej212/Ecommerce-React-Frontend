import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [state, setState] = useState(false)

  return (
    <>
      <header className="hidden bg-gray-900 h-16 w-full absolute top-0 z-20 sm:flex items-center justify-center">
        <ul className="flex gap-10 text-sm font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/sweaters">Sweaters</Link>
          </li>
          <li>
            <Link to="/jackets">Jackets</Link>
          </li>
          <li>
            <Link to="/pants">Pants</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
      <button
        onClick={() => setState(!state)}
        className="sm:hidden fixed top-3 left-3 z-30 bg-none"
      >
        <Icon
          icon="raphael:arrowright"
          fontSize="1.7rem"
          className={`${state ? 'transform rotate-90 text-emerald-500' : 'transform rotate- text-gray-200'} transition-transform duration-500`}
        ></Icon>
      </button>
      <header
        className={`sm:hidden bg-gray-900 ${state ? 'h-full' : 'h-14'} w-full fixed top-0 z-20 flex items-center justify-center text-center text-gray-50 transition-height duration-500`}
      >
        <ul
          className={`flex flex-col gap-10 text-lg ${state ? 'block' : 'hidden'} font-bold`}
        >
          <Link to="/" onClick={() => setState(!state)}>
            Home
          </Link>
          <Link to="/shoes" onClick={() => setState(!state)}>
            Shoes
          </Link>
          <Link to="/sweaters" onClick={() => setState(!state)}>
            Sweaters
          </Link>
          <Link to="/jackets" onClick={() => setState(!state)}>
            Jackets
          </Link>
          <Link to="/pants" onClick={() => setState(!state)}>
            Pants
          </Link>
          <Link to="/about" onClick={() => setState(!state)}>
            About
          </Link>
        </ul>
      </header>
    </>
  )
}
