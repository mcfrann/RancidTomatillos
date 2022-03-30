import './App.css'
import React, {Component} from 'react'
import movieData from './MovieData'
import AllMovies from './AllMovies'
import MovieModule from './MovieModule'
import fetchData from './api-calls'
import icon from './popcorn.png'
import { Route, NavLink } from 'react-router-dom'

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

  // showMovie = match => {
  //   const newMovie = this.state.moviesKey.find(movie => movie.id === match)
  //   this.setState({ moviesKey: newMovie })
  // }

  // showMovie = id => {
  //   fetchData.getOneMovie(id)
  //     .then(movie => this.setState({moviesKey: movie.movie}))
  //     .catch(error => this.setState({error: 'unable to find movie'}))
  // }

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
          <NavLink to="/" className="title-bar" style={{ textDecoration: 'none', color: 'white'}}>
              <h1 className='title' style={{cursor:'pointer'}}>RANCID</h1> <img src={icon} alt='popcorn-icon' id='popcornIcon' /> <h1 className='title' style={{cursor:'pointer'}}>TOMATILLOS</h1> 
            </NavLink>
          </header>
            <main>
              {this.state.error && <h2>Uh oh! Cannot access server.</h2>}
              {this.state.moviesKey.length > 1 &&
              <Route path="/" exact render={ () => <AllMovies
                movies={this.state.moviesKey}/>} />}
              {/* {this.state.moviesKey.length < 50 &&
                <h2>
                  {' '}
                  <img src={icon} alt='popcorn-icon' id='popcornIcon' />
                </h2>} */}
              <Route path="/:id" render={ ({ match }) => {
                // const currentMovie = this.state.moviesKey.find(movie => movie.id === parseInt(match.params.id))
                const id = parseInt(match.params.id)
                return <MovieModule
                  // movieID={movieID}
                  showMovie={this.showMovie}
                  returnHome={this.returnHome}
                  id={id}
                  // currentMovie={currentMovie}
                  />}}
                  />
            </main>
        </div>
    )
  }
}


export default App


 {/* <AllMovies
                  movies={this.state.moviesKey}
                  showMovie={this.showMovie}
                />
              ) : this.state.moviesKey.length < 50 ? (
                <h2>
                  {' '}
                  <img src={icon} alt='popcorn-icon' id='popcornIcon' />
                </h2>
              ) : (
                <MovieModule
                  showMovie={this.showMovie}
                  returnHome={this.returnHome}
                  currentMovie={this.state.moviesKey}
                  displayNumber={this.displayNumber}
                />
              )} */}