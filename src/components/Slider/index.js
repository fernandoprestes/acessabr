import React from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from '../Card'

import 'swiper/swiper-bundle.css'

SwiperCore.use(Pagination)

export const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        767: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }}
    >
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
    </Swiper>
  )
}
