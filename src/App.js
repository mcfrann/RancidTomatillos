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

  showMovie = (id) => {
    const movie = movieData['movies'].find(movie => movie.id === id)
    this.setState({
      movies: [movie]
    })
    
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>RANCID TOMATILLOS</h1>
        </header>
        <main>
          <AllMovies movies={this.state.movies} 
          showMovie={this.showMovie}
          />
        </main>
      </div>
    )
  }
}

export default App
