import React, { Component } from 'react'
import { NavLink, Route, Switch, Link } from 'react-router-dom'
import fetchData from './api-calls'
import './MovieModule.css'
import arrow from './less-than-arrow.png'
import ErrorMessage from './ErrorMessage'
import Trailer from './Trailer'

class MovieModule extends Component {
	constructor(props) {
		super()
		this.state = {
			currentMovie: '',
			trailer: '',
			url: '',
			error: null,
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
				const trailer = data.videos.find((video) => {
					if (video['type'] === 'Trailer') {
						return video
					}
					return video[0]
				})
				this.setState({ trailer: trailer })
				this.setState({ url: `https://www.youtube.com/embed/${trailer.key}` })
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
	goBack = (event) => {
		event.preventDefault()
		this.setState({ error: '' })
	}

	render() {
		return (
			<div className='movie-info-container'>
				{this.state.error && (
					<div
						className='error-container modal'
						onClick={(event) => this.goBack(event)}>
						{<ErrorMessage error={this.state.error} />}
					</div>
				)}
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
							className='text-container'>
							{this.state.currentMovie.title.length < 10 ? (
								<h2 className='movie-title'>{this.state.currentMovie.title}</h2>
							) : (
								<h2>{this.state.currentMovie.title}</h2>
							)}

							{this.state.currentMovie.tagline && (
								<p className='tagline'>
									<em>{this.state.currentMovie.tagline}</em>
								</p>
							)}
							<div className='details-container'>
								<p className='movie-details'>
									<strong>Released:</strong>{' '}
									{this.parseDate(this.state.currentMovie.release_date)}
								</p>
								<p className='movie-details'>
									<strong>
										{this.displayNumber(
											this.state.currentMovie.average_rating
										) + '/10 rating'}
									</strong>
								</p>
							</div>
							<p className='overview'>{this.state.currentMovie.overview}</p>
							<Switch>
								<Route
									path={`/${this.state.currentMovie.id}/trailer`}
									exact
									render={() => (
										<Link
											to={`/${this.state.currentMovie.id}`}
											key={this.state.currentMovie.id}
											id={this.state.currentMovie.id}
											className='trailer-container'>
											<Trailer url={this.state.url} className='trailer' />
										</Link>
									)}
								/>
								<NavLink
									to={`/${this.state.currentMovie.id}/trailer`}
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
