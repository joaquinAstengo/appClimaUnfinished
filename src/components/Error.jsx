import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-500 text-white rounded-md block py-28 px-5'>{children}</div>
  )
}

export default Error