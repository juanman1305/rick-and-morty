import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/ResidentCard.css'

const ResidentsInfo = ( { resident } ) => {
    const [residentInfo, getResidentInfo] = useFetch(resident)

    useEffect(() => {
        getResidentInfo()
    }, [])


    return (
        <article className='resident'>
            <header className='resident__header'>
                <img className='resident__image' src = {residentInfo?.image} alt="" />
                <div className='resident__status'>
                    <div className={`status__circle ${residentInfo?.status}`}></div>
                    <div className='status__value'>{residentInfo?.status}</div>
                </div>
            </header>
            <section className='resident__body'>
                <h3 className='resident__name'>{residentInfo?.name}</h3>
                <hr className='resident__hr'/>
                <ul className='resident__list'>
                    <li className='resident__item'><span className='resident__label'>Specie</span><span className='resident__value'>{residentInfo?.species}</span></li>
                    <li className='resident__item'><span className='resident__label'>Origin</span><span className='resident__value'>{residentInfo?.origin.name}</span></li>
                    <li className='resident__item'><span className='resident__label'># Episodes where appeared</span><span className='resident__value'>{residentInfo?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentsInfo