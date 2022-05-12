import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifBuscadorApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  return (
    <>
      <h1> Gif Buscador App </h1>
      <h6> Busca tu gif ideal en la más completa plataforma Giphy</h6>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category} />
          ))
        }
      </ol>
    </>
  )
}
