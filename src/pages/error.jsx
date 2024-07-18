import React from 'react'
import { NavLink } from 'react-router-dom';

const error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-4xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mt-2">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <NavLink 
          to="/" 
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </NavLink>
      </div>
      {/* <div className="mt-8">
        <img 
          src="https://images.unsplash.com/photo-1587982900090-380ae7d1b48c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80" 
          alt="Error Page Illustration" 
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div> */}
    </div>
  )
}

export default error
