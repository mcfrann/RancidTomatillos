import React, {Component} from 'react'
import './MovieModule.css'

const MovieModule = ({currentMovie, returnHome, displayNumber}) => {
  const movie = currentMovie
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
          style={{
            opacity: '85%',
            height: '40vw',
            width: '44vw',
            padding: '1vw'
          }}
        >
          <h2>{movie.title}</h2>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Average Rating:</strong>{' '}
            {displayNumber(movie.average_rating)}
          </p>
          <button className='return-home' id='button' onClick={returnHome}>
            Return Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieModule
