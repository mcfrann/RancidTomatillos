import React from 'react'
import './Trailer.css'

const Trailer = ({ url }) => {
	return (
		<div className='trailer'>
			<iframe title='watch-trailer' width='420' height='315' src={url}></iframe>
		</div>
	)
}

export default Trailer
