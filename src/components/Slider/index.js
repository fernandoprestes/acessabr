import React, { useState, useEffect, useContext } from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from '../Card'
import { api } from '../../config/api'
import { FilterContext } from '../../contexts/FilterContext'

import 'swiper/swiper-bundle.css'

SwiperCore.use(Pagination)

export const Slider = () => {
  const { filteredPlace, setFilteredPlace } = useContext(FilterContext)
  const [places, setPlaces] = useState([])

  useEffect(() => {
    getPlaces()
  }, [])

  const getPlaces = async () => {
    const result = await api.get(`/places`)
    if (result.status === 200) {
      setPlaces(result.data)
    }
  }

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        767: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }}
    >
      {places.map(item => (
        <SwiperSlide key={item.id}>
          <Card key={item.id} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
