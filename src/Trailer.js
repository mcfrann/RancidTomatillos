import React, { Component } from 'react'
import './Trailer.css'
import fetchData from './api-calls'

class Trailer extends Component {
	constructor({ id }) {
		super()
		this.state = {
			trailer: '',
		}
	}
	componentDidMount = (id) => {
		fetchData.getTrailer(id).then((data) => {
			const trailer = data.videos.find((video) => video.type === 'trailer')
			this.setState({ trailer: trailer })
		})
	}
	render() {
		const url = `https://www.youtube.com/watch?v=${this.state.trailer.key}`
		return (
			<a href={url} rel='noreferrer' target='_blank'>
				Watch Trailer
			</a>
		)
	}
}
///get movie trailer if movie.type === 'trailer' return trailer
//trailer.key & interpolate that as a youtube link
//set the watch trailer link to that youtube link

export default Trailer
