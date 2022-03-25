import './App.css'
import React, { Component } from 'react'
import movieData from './MovieData'
import AllMovies from './AllMovies'
import MovieModule from './MovieModule'

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
    console.log(this.state.movies.length)
    
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>RANCID TOMATILLOS</h1>
        </header>
        <main>
          {this.state.movies.length > 1 ?
          <AllMovies movies={this.state.movies} showMovie={this.showMovie}/> :
          <MovieModule />}
        </main>
      </div>
    )
  }
}

export default App
