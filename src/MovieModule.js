import React, { Component } from 'react'
import './MovieModule.css'
import MovieData from './MovieData'

const MovieModule = (props) => {
  const movie = props.currentMovie

  return (
    <div className='movie-info-container'>
      <div
        className='movie-mod'
        style={{
          backgroundImage: 'url(' + movie.backdrop_path + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='bottom-section'></div>
        <img
          className='movie-poster'
          src={movie.poster_path}
          alt={movie.title}
        ></img>

        <div
          className='text-container'
          style={{ opacity: '80%', padding: '10.6vw' }}
        >
          <h2>{movie.title}</h2>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Average Rating:</strong> {movie.average_rating.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieModule
