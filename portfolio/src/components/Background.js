import React from 'react'

function Background() {
  return (
    <div className='fixed w-full h-full'>
        <video autoPlay loop muted>
      <source src= {require('../assets/videos/bgVideo1.mp4')} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  )
}

export default Background
