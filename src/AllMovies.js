import React from 'react'
import './AllMovies.css'
import MovieTile from './MovieTile'

const AllMovies = (props) => {
  const movieInfo = this.props.map((movie) => {
    return (
      <MovieTile
        id={movie.id}
        key={movie.id}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        title={movie.title}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
      />
    )
  })
  return <div className='movies-container'>{movieInfo}</div>
}

export default AllMovies
