import './App.css'
import React, {Component} from 'react'
import movieData from './MovieData'
import AllMovies from './AllMovies'
import MovieModule from './MovieModule'
import fetchData from './api-calls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      moviesKey: [],
      error: '',
    }
  }
  componentDidMount() {
    fetchData
      .getAllMovies()
      .then(data => {
        this.setState({moviesKey: data.movies})
      })
      .catch(error => this.setState({error: 'uh oh'}))
  }

  showMovie = id => {
    // const movie = movieData['movies'].find((movie) => movie.id === id)

    fetchData
      .getOneMovie(id)
      .then(movie => this.setState({moviesKey: movie.movie}))
      .catch(error => this.setState({error: 'unable to find movie'}))
  }

  returnHome = () => {
    this.setState({
      movies: movieData['movies'],
    })
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>RANCID TOMATILLOS</h1>
        </header>
        <main>
          {this.state.error && <h2>Uh oh! Cannot access server.</h2>}
          {this.state.moviesKey.length > 1 ? (
            <AllMovies
              movies={this.state.moviesKey}
              showMovie={this.showMovie}
            />
          ) : (
            <MovieModule
              showMovie={this.showMovie}
              returnHome={this.returnHome}
              currentMovie={this.state.moviesKey}
            />
          )}
        </main>
      </div>
    )
  }
}

export default App
