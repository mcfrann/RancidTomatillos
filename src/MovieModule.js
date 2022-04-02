import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { NavLink, Route, Switch, Link } from 'react-router-dom'
import fetchData from './api-calls'
import './MovieModule.css'
import backArrow from './yellow-arrow.png'
import arrow from './less-than-arrow.png'
import Trailer from './Trailer'

import ErrorMessage from './ErrorMessage'

class MovieModule extends Component {
	constructor(props) {
		super()
		this.state = {
			currentMovie: '',
			trailer: '',
			error: null,
			url: '',
			path: '',
		}
	}

	componentDidMount() {
		if (!this.state.error) {
			fetchData
				.getOneMovie(this.props.id)
				.then((movie) => this.setState({ currentMovie: movie.movie }))
				.catch((error) => this.setState({ error: error }))
		}
		fetchData
			.getTrailer(this.props.id)
			.then((data) => {
				const trailer = data.videos.find((video) => video['type'] === 'Trailer')
				this.setState({ trailer: trailer })
				this.setState({ url: `https://www.youtube.com/embed/${trailer.key}` })
				this.setState({ path: `${trailer.movie_id}/trailer` })
			})
			.catch((error) => this.setState({ error: error }))
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

	//// remember to move this!

	render() {
		// const url = `https://www.youtube.com/embed/${this.state.trailer.key}`
		return (
			<div className='movie-info-container'>
				{this.state.error && <ErrorMessage error={this.state.error} />}
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
							<Switch>
								<Route
									path='/trailer'
									exact
									render={() => (
										<Link
											to={`/${this.state.currentMovie.id}`}
											key={this.state.currentMovie.id}
											id={this.state.currentMovie.id}
											className='trailer-container'>
											<div className='trailer-container'>
												<iframe
													title='watch-trailer'
													width='854'
													height='480'
													className='trailer'
													src={this.state.url}></iframe>
											</div>
										</Link>
									)}
								/>
								<NavLink
									to='/trailer'
									// target='_blank'
									id='watchTrailer'
									style={{ textDecoration: 'none' }}>
									Watch Trailer
								</NavLink>
							</Switch>

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
