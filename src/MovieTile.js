import React from 'react'
import './MovieTile.css'

const MovieTile = ({ id, title, poster_path, showMovie }) => {
  return (
    <div className='movie-tile'>
      <img src={poster_path} alt={title} id={id} className='movie-img' onClick={() => showMovie(id)}></img>
    </div>
  )
}

export default MovieTile
