import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [state, setState] = useState(false)

  return (
    <>
      <header className="hidden bg-gray-900 h-16 w-full absolute top-0 z-20 sm:flex items-center justify-center">
        <ul className="flex gap-10 text-sm font-normal">
          <Link to="/">home</Link>
          <Link to="/shoes">shoes</Link>
          <Link to="/sweaters">sweaters</Link>
          <Link to="/jackets">jackets</Link>
          <Link to="/pants">pants</Link>
          <Link to="/about">about</Link>
        </ul>
      </header>
      <button
        onClick={() => setState(!state)}
        className="sm:hidden absolute top-3 left-3 z-30 bg-none"
      >
        <Icon
          icon="raphael:arrowright"
          fontSize="1.7rem"
          className={`${state ? 'transform rotate-90 text-emerald-500' : 'transform rotate- text-gray-200'} transition-transform duration-500`}
        ></Icon>
      </button>
      <header
        className={`sm:hidden bg-gray-900 ${state ? 'h-full' : 'h-14'} w-full absolute top-0 z-20 flex items-center justify-center text-center text-gray-50 transition-height duration-500`}
      >
        <ul
          className={`flex flex-col gap-10 text-lg ${state ? 'block' : 'hidden'}`}
        >
          <Link to="/" onClick={() => setState(!state)}>
            home
          </Link>
          <Link to="/shoes" onClick={() => setState(!state)}>
            shoes
          </Link>
          <Link to="/sweaters" onClick={() => setState(!state)}>
            sweaters
          </Link>
          <Link to="/jackets" onClick={() => setState(!state)}>
            jackets
          </Link>
          <Link to="/pants" onClick={() => setState(!state)}>
            pants
          </Link>
          <Link to="/about" onClick={() => setState(!state)}>
            about
          </Link>
        </ul>
      </header>
    </>
  )
}
