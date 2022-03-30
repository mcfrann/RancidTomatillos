import React from 'react'
import { Link } from 'react-router-dom'
import './MovieTile.css'

const MovieTile = ({ id, title, poster_path }) => {
  return (
    <Link key={id} to={`/${id}`} id={id} className='movie-tile'>
      <img src={poster_path} alt={title} id={id} className='movie-img'></img>
    </Link>
  )
}

export default MovieTile
