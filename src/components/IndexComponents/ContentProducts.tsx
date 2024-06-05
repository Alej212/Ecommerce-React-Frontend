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
  return (
    <Swiper
      className="h-56"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={3}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="bg-none">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="bg-none">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="bg-none">
        <Card />
      </SwiperSlide>
      <SwiperSlide className="bg-none">
        <Card />
      </SwiperSlide>
    </Swiper>
  )
}
