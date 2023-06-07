import React from 'react'

function Error({msg}) {
  return (
    <>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-2/4 text-3xl font-semibold'>{msg}</h1>
    </>
  )
}

export default Error
