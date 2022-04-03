import React from 'react'
import './Trailer.css'

const Trailer = ({ url }) => {
	return (
		<iframe
			className='trailer'
			title='watch-trailer'
			width='854'
			height='480'
			src={url}></iframe>
	)
}

export default Trailer
