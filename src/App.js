import './App.css'
import React, { Component } from 'react'
import movieData from './MovieData'
import AllMovies from './AllMovies'
class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData['movies'],
    }
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>RANCID TOMATILLOS</h1>
          <AllMovies movies={this.state.movies} />
        </header>
      </div>
    )
  }
}

export default App
