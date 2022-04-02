import React from 'react'
import './Trailer.css'

const Trailer = ({ url }) => {
	return (
		<div className='trailer'>
			<h2>TRAILER TIME</h2>
			<iframe title='watch-trailer' width='420' height='315' src={url}></iframe>
		</div>
	)
}

export default Trailer
