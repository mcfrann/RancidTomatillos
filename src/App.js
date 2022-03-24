import './App.css'
import React, { Component } from 'react'
import movieData from './MovieData'
import AllMovies from './AllMovies'
class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData,
    }
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Rancid Tomatillos</h1>
          <AllMovies allMovies={this.state.movies} />
        </header>
      </div>
    )
  }
}

export default App
