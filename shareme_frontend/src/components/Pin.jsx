import React from 'react'
import { urlFor } from '../client'

const Pin = ({ pin: { postedBy, image, id, destination }}) => {
  return (
    <div>
        <img className='rounded-lg w-full p-1' alt='user-post' src={urlFor(image).width(250).url()} />
    </div>
  )
}

export default Pin