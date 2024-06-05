// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import FirstSlider from './FirstSlider'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function BaseCarousel() {
  return (
    <div className="bg-none h-screen">
      <Swiper
        className="h-full"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="bg-none">
          <img className="h-full" src="/src/assets/images/21274.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-emerald-400">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-blue-400">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-amber-500">Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}
