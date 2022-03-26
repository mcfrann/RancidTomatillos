import React from 'react'
import './AllMovies.css'
import MovieTile from './MovieTile'

const AllMovies = ({ movies, showMovie }) => {
  console.log('allmovies movies', movies)
  const movieInfo = movies.map((movie) => {
    return (
      <MovieTile
        id={movie.id}
        key={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        showMovie={showMovie}
      />
    )
  })
  return <div className='movies-container'>{movieInfo}</div>
}

export default AllMovies
