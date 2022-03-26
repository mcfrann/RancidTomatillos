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
    fetchData.getAllMovies()
      .then(data => {
        this.setState({moviesKey: data.movies})
      })
      .catch(error => this.setState({error: 'uh oh'}))
  }

  showMovie = id => {
    fetchData.getOneMovie(id)
      .then(movie => this.setState({moviesKey: movie.movie}))
      .catch(error => this.setState({error: 'unable to find movie'}))
  }

  returnHome = () => {
    fetchData.getAllMovies()
      .then(data => {
        this.setState({moviesKey: data.movies})
      })
      .catch(error => this.setState({error: 'uh oh'}))
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>RANCID TOMATILLOS</h1>
        </header>
        <main>
          {this.state.error && <h2>Uh oh! Cannot access server.</h2>}
          {this.state.movies > 1 && <h1>loading...</h1>}
          {this.state.moviesKey.length > 1 ? (
            <AllMovies
              movies={this.state.moviesKey}
              showMovie={this.showMovie}
            />
          ) : this.state.moviesKey.length < 50 ? (
            <h2> loading... </h2>
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
