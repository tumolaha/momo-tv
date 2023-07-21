import React from "react"

import { Swiper, SwiperSlide } from "swiper/react"

// import './styles.css';
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper/modules"
import Card from "src/components/Card"
const ListCard = () => {
  return (
    <div className="w-full py-5 px-5 bg-gray-900">
      <div className="flex items-center mb-4 w-full">
        <h5 className="text-white font-bold text-base"> Hot More</h5>
      </div>
      <Swiper
        className="mySwiper w-full"
        slidesPerView={4}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
      >
        <SwiperSlide >
          <Card />
        </SwiperSlide>
        <SwiperSlide >
          <Card />
        </SwiperSlide>
        <SwiperSlide >
          <Card />
        </SwiperSlide>
        <SwiperSlide >
          <Card />
        </SwiperSlide>
        <SwiperSlide >
          <Card />
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default ListCard
