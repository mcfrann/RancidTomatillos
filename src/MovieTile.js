import React from 'react'
import './MovieTile.css'

const MovieTile = ({ id, title, poster_path }) => {
  return (
    <div className='MovieTile'>
      <img src={poster_path} alt={title} id={id}></img>
    </div>
  )
}

export default MovieTile
