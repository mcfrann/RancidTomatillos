import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import fetchData from './api-calls'
import './MovieModule.css'
import backArrow from './yellow-arrow.png'
import arrow from './less-than-arrow.png'
import ErrorMessage from './ErrorMessage'
import Trailer from './Trailer'

class MovieModule extends Component {
	constructor(props) {
		super()
		this.state = {
			currentMovie: '',
			trailer: '',
			error: null
		}
	}

	componentDidMount() {
		if (!this.state.error) {
			fetchData
			.getOneMovie(this.props.id)
			.then((movie) => this.setState({ currentMovie: movie.movie }))
			.catch((error) => this.setState({error: error}))
		}
	}

	displayNumber(number) {
		return Math.round(number)
	}
	parseDate = (date) => {
		const splitDate = date.split('-')
		const newDate = splitDate.slice(1)
		newDate.push(splitDate[0])
		return newDate.join('/')
	}
	retrieveTrailer = () => {
		fetchData.getTrailer(this.props.id).then((data) => {
			const trailer = data.videos.find((video) => video['type'] === 'Trailer')
			this.setState({ trailer: trailer })
		})
		.catch((error) => this.setState({error: error}))
	}
	render() {
		this.retrieveTrailer()

		const url = `https://www.youtube.com/embed/${this.state.trailer.key}`
		return (
			<div className='movie-info-container'>
				{this.state.error && <ErrorMessage error={this.state.error}/>}
				{!this.state.currentMovie && <h2 className='loading'>Loading...</h2>}
				{this.state.currentMovie && (
					<div
						className='movie-mod'
						style={{
							'--img': 'url(' + this.state.currentMovie.backdrop_path + ')',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}>
						<img
							className='movie-poster'
							src={this.state.currentMovie.poster_path}
							alt={this.state.currentMovie.title}></img>

						<div
							className='text-container'
							style={{
								height: '40vw',
								width: '44vw',
								padding: '1vw',
							}}>
							<h2>{this.state.currentMovie.title}</h2>
							<p className='movie-details'>
								<strong>Release Date:</strong>{' '}
								{this.parseDate(this.state.currentMovie.release_date)}
							</p>
							<p className='movie-details'>
								<strong>Average Rating:</strong>{' '}
								{this.displayNumber(this.state.currentMovie.average_rating) +
									'/10'}
							</p>
							<p className='overview'>{this.state.currentMovie.overview}</p>
							{/* <NavLink
								to={{ pathname: url }}
								target='_blank'
								id='watchTrailer'
								style={{ textDecoration: 'none' }}>
								Watch Trailer
							</NavLink> */}
							{/* <Route exact path="/" component={Landing} /> */}
							{/* <Route path="/:id" render={ ({ match }) => {
                const id = parseInt(match.params.id)
                return <MovieModule
                  showMovie={this.showMovie}
                  returnHome={this.returnHome}
                  id={id}
                  />}}
                  /> */}

							<Route
								path='/trailer'
								id='watchTrailer'
								key='watchTrailer'
								render={() => {
									return (
										<Trailer url={{ url }} id={this.state.currentMovie.id} />
									)
								}}
							/>

							<NavLink
								to='/trailer'
								target='_blank'
								id='watchTrailer'
								style={{ textDecoration: 'none' }}>
								Watch Trailer
							</NavLink>

							<NavLink to='/'>
								<img src={arrow} alt='back-arrow' id='backArrow' />
							</NavLink>
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default MovieModule
