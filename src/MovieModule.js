import { render } from '@testing-library/react'
import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import fetchData from './api-calls'
import './MovieModule.css'

class MovieModule extends Component {
  constructor(props) {
    super()
    this.state = {
      currentMovie: ''
    }
  }
  // const movie = currentMovie
  // console.log("currentmovie:", movie)
  // {currentMovie, returnHome, displayNumber}

componentDidMount() {
  fetchData.getOneMovie(this.props.id)
    .then(movie => this.setState({currentMovie: movie.movie}))
    .catch(error => this.setState({error: 'unable to find movie'}))
}

displayNumber(number) {
  return Math.round(number)
}

render() {
  return (
    <div className='movie-info-container'>
      <div
        className='movie-mod'
        style={{
          "--img": 'url(' + this.state.currentMovie.backdrop_path + ')',          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          className='movie-poster'
          src={this.state.currentMovie.poster_path}
          alt={this.state.currentMovie.title}
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
          <h2>{this.state.currentMovie.title}</h2>
          <p>
            <strong>Release Date:</strong> {this.state.currentMovie.release_date}
          </p>
          <p>
            <strong>Average Rating:</strong>{' '}
            {this.displayNumber(this.state.currentMovie.average_rating)}
          </p>
            <NavLink to="/">
              <button className='return-home' id='button' onClick={this.props.returnHome}>
              Return Home
            </button>
          </NavLink>
        </div>
      </div>
    </div>
    )
  }
}


export default MovieModule
