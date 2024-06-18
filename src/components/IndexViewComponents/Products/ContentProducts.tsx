// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from './Card'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// JSON
import shoesData from '../../../JSON/shoes.json'
import sweatersData from '../../../JSON/sweaters.json'
import jacketsData from '../../../JSON/jackets.json'
import pantsData from '../../../JSON/pants.json'

type Product = {
  custom_id: string
  image: string
  title: string
  price: string
  genre: string
  type_product: string
}

export default function ContentProducts({ type }: { type: string }) {
  let data: Product[]
  switch (type) {
    case 'shoes':
      data = shoesData.slice(0, 10)
      break
    case 'sweaters':
      data = sweatersData.slice(0, 10)
      break
    case 'jackets':
      data = jacketsData.slice(0, 10)
      break
    case 'pants':
      data = pantsData.slice(0, 10)
      break
    default:
      data = []
  }
  return (
    <Swiper
      className="h-64 sm:h-72"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={3}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        500: {
          slidesPerView: 4,
        },
        640: {
          slidesPerView: 4,
          // spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 5,
          // spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 6,
          // spaceBetween: 40,
        },
      }}
    >
      {data.map((product, index) => (
        <SwiperSlide key={index} className="bg-none">
          <Card product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
