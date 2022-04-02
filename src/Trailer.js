import React from 'react'
import './Trailer.css'

const Trailer = ({ url }) => {
	return (
		<div className='trailer'>
<<<<<<< HEAD
			<h2>TRAILER TIME</h2>
=======
			console.log(url)
>>>>>>> dcd3dded69f88faab1c39522da74ecbe158a5923
			<iframe title='watch-trailer' width='420' height='315' src={url}></iframe>
		</div>
	)
}

export default Trailer
