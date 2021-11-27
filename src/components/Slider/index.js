import React, { useContext, useEffect, useState } from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { api } from '../../config/api'
import { FilterContext } from '../../contexts/FilterContext'
import { Card } from '../Card'

SwiperCore.use(Pagination)

export const Slider = () => {
  const { filteredPlace } = useContext(FilterContext)
  const [places, setPlaces] = useState([])

  useEffect(() => {
    filterPlaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredPlace])

  useEffect(() => {
    getPlaces()
  }, [])

  const getPlaces = async () => {
    const result = await api.get(`/places`)
    if (result.status === 200) {
      setPlaces(result.data)
    }
  }

  const filterPlaces = async () => {
    if (filteredPlace === '') return getPlaces()
    const result = await api.get(`/places?category=${filteredPlace}`)
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
