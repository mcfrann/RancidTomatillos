import React, {Component} from 'react'
import './MovieModule.css'

const MovieModule = ({currentMovie, returnHome}) => {
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
        <img
          className='movie-poster'
          src={movie.poster_path}
          alt={movie.title}
        ></img>

        <div
          className='text-container'
          style={{opacity: '80%', padding: '10.6vw'}}
        >
          <div className='display-movie-info'>
            <h2>{movie.title}</h2>
            <br/>
            <h3>Release Date:</h3>
            <p>
              {movie.release_date}
            </p>
            <br/>
            <h3>Average Rating:</h3>
            <p>
              {movie.average_rating}
            </p>
            <br/>
            <h3>Genre</h3>
            <p>
              {movie.genre}
            </p>
            <br/>
            <h3>Overview:</h3>
            <p>
              {movie.overview}
            </p>
            <br/>
            <button className='return-home' onClick={returnHome}>
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModule
