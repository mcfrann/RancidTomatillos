import React, { Component } from "react"
import "./MovieModule.css"
import MovieData from "./MovieData"

const MovieModule = (props) => {
  const movie = props.currentMovie

  return(
    <div className='movie-mod'>
      <img className="movie-poster" src={movie.poster_path} alt={movie.title}></img>
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <p>{movie.average_rating.toFixed(2)}</p>
    </div>
  )
}

export default MovieModule