import React from 'react'

function Navbar() {
  return (
    <div className='relative top-10 w-screen h-30'>
      <div className='px-10'>
      <div className='flex flex-row jus py-6 justify-between bg-black bg-opacity-70 rounded-xl px-10'>
            <h1 className='text-blue-800 font-bold text-3xl'>Adeel's Portfolio</h1>
            <div className='flex flex-row gap-2'>
                <p className='text-white border  p-2 border-gray-100 rounded hover:bg-gradient-to-r from-black via-black to-blue-800'>Home</p>
                <p className='text-white border p-2 border-gray-100 rounded hover:bg-gradient-to-r from-black via-black to-blue-800'>About</p>
                <p className='text-white border p-2 border-gray-100 rounded hover:bg-gradient-to-r from-black via-black to-blue-800'>Contact</p>
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default Navbar
