import React from 'react'

export const GifGridItem = ({ title, img }) => {
    console.log(title)
    return (
        <div className='card animate__animated animate__heartBeat'>
            <img src={img} alt={title} />
            <p> {title} </p>
        </div>
    )
}
