import './App.css'
import React, {Component} from 'react'
import AllMovies from './AllMovies'
import MovieModule from './MovieModule'
import fetchData from './api-calls'
import icon from './popcorn.png'
import ErrorMessage from './ErrorMessage'
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
      .catch(error => this.setState({error: error}))
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
              {this.state.error && <ErrorMessage error={this.state.error}/>}
              {this.state.moviesKey.length > 1 &&
              <Route path="/" exact render={ () => <AllMovies
                movies={this.state.moviesKey}/>} />}
              <Route path="/:id" render={ ({ match }) => {
                const id = parseInt(match.params.id)
                return <MovieModule
                  showMovie={this.showMovie}
                  returnHome={this.returnHome}
                  id={id}
                  />}}
                  />
            </main>
        </div>
    )
  }
}


export default App
