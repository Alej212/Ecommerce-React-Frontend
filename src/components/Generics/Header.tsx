import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import HeaderMobile from './HeaderMobile'

export default function Header() {
  const [state, setState] = useState(false)
  const [idioms, setIdioms] = useState(false)
  const { t, i18n } = useTranslation()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng)
  }
  return (
    <>
      <header className="hidden bg-gray-900 h-16 w-full absolute top-0 z-20 sm:flex items-center justify-around">
        <ul>
          <li>
            <Link
              to="/about"
              className="flex gap-1 items-center font-medium uppercase"
            >
              <Icon
                icon="line-md:buy-me-a-coffee-filled"
                className="h-7 w-7 bg-slate-50 rounded-full text-gray-900"
              ></Icon>
            </Link>
          </li>
        </ul>
        <ul className="flex gap-11 text-sm font-bold">
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
        <ul className="flex gap-3">
          <li>
            <Link to="/cart">
              <Icon
                icon="material-symbols:shopping-cart"
                className="h-7 w-7"
              ></Icon>
            </Link>
          </li>
          <li onClick={() => setIdioms(!idioms)}>
            <Icon
              icon="mdi:world"
              className={`${idioms ? 'text-emerald-400' : 'text-white'} h-7 w-7`}
            ></Icon>
          </li>
          <div
            className={`${idioms ? 'right-0' : '-right-9'} hidden absolute z-20 top-20 px-2 py-4 bg-gray-950 rounded-full sm:grid grid-cols-1 gap-y-3 transition-all duration-300`}
          >
            <Icon
              icon="circle-flags:us"
              className="text-white h-7 w-7"
              onClick={() => changeLanguage('en')}
            ></Icon>
            <Icon
              icon="circle-flags:es"
              className="text-white h-7 w-7"
              onClick={() => changeLanguage('es')}
            ></Icon>
            <Icon
              icon="circle-flags:fr"
              className="text-white h-7 w-7"
              onClick={() => changeLanguage('fr')}
            ></Icon>
          </div>
        </ul>
      </header>
      <HeaderMobile />
    </>
  )
}
