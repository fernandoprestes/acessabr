import React from 'react'
import './style.scss'

export const CuratorItem = ({ curatorPhoto, curatorName }) => {
  return (
    <div className="curatorItem__container">
      <img
        className="curatorItem__avatar"
        src={curatorPhoto}
        alt="avatar curator"
      />
      <div className="curatorItem__details">
        <div>
          <h3>{curatorName}</h3>
          <span>Curator</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi fugit
          voluptatum porro dolorum doloribus corrupti ipsam perspiciatis numquam
          sapiente. Nobis atque veniam maxime nesciunt velit saepe hic sed ab
          rem?
        </p>
      </div>
    </div>
  )
}
