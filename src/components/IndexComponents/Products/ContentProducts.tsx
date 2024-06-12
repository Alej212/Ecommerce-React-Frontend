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

export default function ContentProducts() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <Swiper
      className="h-60 sm:h-64"
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
          slidesPerView: 7,
          // spaceBetween: 40,
        },
      }}
    >
      {data.map((_item, index) => (
        <SwiperSlide key={index} className="bg-none">
          <Card />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
