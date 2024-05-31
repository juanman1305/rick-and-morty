import React from 'react'
import './styles/LocationInfo.css'

const LocationInfo = ( { locinfo } ) => {
  return (
    <article className='location'>
        <h2 className='location__name'>{locinfo?.name}</h2>
        <ul className='location__list'>
            <li className='location__item'><span className='location__label'>Type: </span> <span className='location__value'>{locinfo?.type}</span></li>
            <li className='location__item'><span className='location__label'>Dimension: </span> <span className='location__value'>{locinfo?.dimension}</span></li>
            <li className='location__item'><span className='location__label'>Population: </span> <span className='location__value'>{locinfo?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo