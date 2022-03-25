import React, { Component } from "react"
import "./MovieModule.css"
import MovieData from "./MovieData"

class MovieModule extends Component {
  constructor(id) {
    super(id)
    this.state = {
      id: '',
      poster_path: '',
      backdrop_path: '',
      title: '',
      average_rating: '',
      release_date: ''
    }
  }


  render() {
    return(
      <div className='movie-mod'>
       <p>Hiiiii</p>
      </div>
    )
  }
}

export default MovieModule