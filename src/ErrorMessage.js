import React from 'react'

const ErrorMessage = ({error}) => {
  return (
    <h2 className="server-error">{`${error}`}</h2>
  )
}

export default ErrorMessage