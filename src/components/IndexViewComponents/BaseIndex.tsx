import ContentProducts from './Products/ContentProducts'
import FourSlider from './Carousel/FourSlider'
import { useTranslation } from 'react-i18next'

export default function BaseIndex() {
  const { t } = useTranslation()
  return (
    <div>
      <FourSlider />
      <div className="py-3">
        <div>
          <h2 className="text-2xl font-bold pl-2">{t('home.shoes')}</h2>
          <ContentProducts type="shoes" />
        </div>
        <div>
          <h2 className="text-2xl font-bold pl-2">{t('home.sweaters')}</h2>
          <ContentProducts type="sweaters" />
        </div>
        <div>
          <h2 className="text-2xl font-bold pl-2">{t('home.jackets')}</h2>
          <ContentProducts type="jackets" />
        </div>
      </div>
    </div>
  )
}
