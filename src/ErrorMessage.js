import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = ({ error, goBack }) => {
	return <h2 className='server-error'>{`${error}`}</h2>
}

export default ErrorMessage
