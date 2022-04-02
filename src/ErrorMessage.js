import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = ({ error }) => {
	return <h2 className='server-error modal'>{`${error}`}</h2>
}

export default ErrorMessage
