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

// 3D three fiber
import FirstSlider from './FirstSlider'
import ThirdSlider from './ThirdSlider'
import FourSlider from './FourSlider'

export default function BaseCarousel() {
  return (
    <div className="bg-none h-48">
      <Swiper
        className="h-full"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="bg-blue-200">
          <FirstSlider />
        </SwiperSlide>
        <SwiperSlide className="bg-gray-400">
          <ThirdSlider />
        </SwiperSlide>
        <SwiperSlide className="bg-red-200">
          <FourSlider />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
