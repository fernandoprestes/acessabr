import React from 'react'
import { CuratorItem } from '../CuratorItem'
import curatorPhotoElizabeth from '../../images/avatar/elizabeth.jpg'
import curatorPhotoEloise from '../../images/avatar/eloise.jpg'
import curatorPhotoRobert from '../../images/avatar/robert.jpg'

import './style.scss'

export const Curator = () => {
  return (
    <div className="curator__container">
      <h2 className="curator__title">
        <span>Nossos</span> Curadores
      </h2>
      <div className="curator__wrapperItem">
        <CuratorItem
          curatorPhoto={curatorPhotoElizabeth}
          curatorName={'Elizabeth'}
        />
        <CuratorItem curatorPhoto={curatorPhotoEloise} curatorName={'Eloise'} />
        <CuratorItem curatorPhoto={curatorPhotoRobert} curatorName={'Eobert'} />
      </div>
    </div>
  )
}
