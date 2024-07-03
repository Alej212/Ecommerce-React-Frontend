import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function HeaderMobile() {
  const { t, i18n } = useTranslation()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng)
  }
  const [state, setState] = useState(false)
  return (
    <>
      <button
        onClick={() => setState(!state)}
        className="sm:hidden fixed top-3 left-3 z-30 bg-none"
      >
        <Icon
          icon="ep:menu"
          fontSize="1.9rem"
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
            {t('header.home')}
          </Link>
          <Link to="/shoes" onClick={() => setState(!state)}>
            {t('header.shoes')}
          </Link>
          <Link to="/sweaters" onClick={() => setState(!state)}>
            {t('header.sweaters')}
          </Link>
          <Link to="/jackets" onClick={() => setState(!state)}>
            {t('header.jackets')}
          </Link>
          <Link to="/pants" onClick={() => setState(!state)}>
            {t('header.pants')}
          </Link>
        </ul>
      </header>
      <ul className="flex gap-3 fixed top-3 right-3 z-20 sm:hidden">
        <li onClick={() => setState(false)}>
          <Link
            to="/about"
            className="flex gap-1 items-center font-medium uppercase"
          >
            me
            <Icon
              icon="line-md:buy-me-a-coffee-filled"
              className="h-7 w-7"
            ></Icon>
          </Link>
        </li>
        <li onClick={() => setState(false)}>
          <Link to="/cart">
            <Icon
              icon="material-symbols:shopping-cart"
              className="h-7 w-7"
            ></Icon>
          </Link>
        </li>
        <li>
          <Icon
            icon="mdi:world"
            className={`${state ? 'text-emerald-400' : 'text-white'} h-7 w-7`}
          ></Icon>
        </li>
      </ul>
      <div
        className={`${state ? 'top-20' : '-top-24'} sm:hidden fixed z-20 left-1/2 transform -translate-x-1/2 p-2 rounded-md flex gap-7 transition-all duration-300`}
      >
        <Icon
          icon="circle-flags:us"
          className="text-white h-11 w-11"
          onClick={() => changeLanguage('en')}
        ></Icon>
        <Icon
          icon="circle-flags:es"
          className="text-white h-11 w-11"
          onClick={() => changeLanguage('es')}
        ></Icon>
        <Icon
          icon="circle-flags:fr"
          className="text-white h-11 w-11"
          onClick={() => changeLanguage('fr')}
        ></Icon>
      </div>
    </>
  )
}
