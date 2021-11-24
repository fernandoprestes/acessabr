import React from 'react'
import { CuratorItem } from '../CuratorItem'
import './style.scss'

export const Curator = () => {
  return (
    <div className="curator__container">
      <h2 className="curator__title">Nosso Curadores</h2>
      <div className="curator__wrapperItem">
        <CuratorItem />
        <CuratorItem />
        <CuratorItem />
      </div>
    </div>
  )
}
