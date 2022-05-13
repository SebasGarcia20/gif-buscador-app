import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category)

  return (
    <>
      <h5>{category}</h5>
      {loading && <p className='card animate__animated animate__heartBeat'> Loading . . .</p>}
      <div className='card-grid'>
        {images.map(img => (
          <GifGridItem
            key={img.id}
            img={img.url}
            title={img.title}
          />
        ))}
      </div>
    </>
  )
}
