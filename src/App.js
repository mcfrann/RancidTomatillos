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
      error: ''
    }
  }
  componentDidMount() {
    fetchData.getAllMovies()
      .then(data => {
        this.setState({moviesKey: data.movies})
      })
      .catch(error => this.setState({ error: "uh oh" }))
  }

  showMovie = (id) => {
    fetchData.getOneMovie(id)
      .then()
    // const movie = movieData['movies'].find((movie) => movie.id === id)
    // this.setState({
    //   movies: [movie],
    // })
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
          {/* {this.state.movies.length > 1 ? (
            <AllMovies movies={this.state.movies} showMovie={this.showMovie} />
          ) : (
            <MovieModule
              currentMovie={this.state.movies[0]}
              returnHome={this.returnHome}
            />
          )} */}
          {this.state.error && <h2>Uh oh! Cannot access server.</h2>}
          <AllMovies movies={this.state.moviesKey} />
        </main>
      </div>
    )
  }
}

export default App
