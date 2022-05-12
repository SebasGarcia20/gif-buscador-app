import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?limit=10&q="dragon+ball"&api_key=OAFoptQH39F7zVnnfQ9kQAHPY9QcmrjR'
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    })
    setImages(gifs)
  }

  useEffect(() => {
    getGifs()
  }, [])


  return (
    <div className='card-grid'>
      <h5>{category}</h5>
      {images.map(img => (
        <GifGridItem
          key={img.id}
          img={img.url}
          title={img.title}
        />
      ))}
    </div>
  )
}
