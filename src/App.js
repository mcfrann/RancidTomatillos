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
    // this.currentMovie = null
  }

  showMovie = (id) => {
    const movie = movieData['movies'].find(movie => movie.id === id)
    this.setState({
      movies: [movie]
    })
  }

  // returnHome = () => {
  //   this.setState
  // }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>RANCID TOMATILLOS</h1>
        </header>
        <main>
          {this.state.movies.length > 1 ?
          <AllMovies movies={this.state.movies} showMovie={this.showMovie}/> :
          <MovieModule currentMovie={this.state.movies[0]}/>}
        </main>
      </div>
    )
  }
}

export default App
