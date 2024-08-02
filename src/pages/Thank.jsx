// src/ThankYouPage.js

import React from 'react';

const Thank = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">We appreciate your business. If you have any questions, please email <a href="mailto:support@agastya.com" className="text-blue-500">agastyainternational0@gmail.com</a>.</p>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-700 transition duration-300"
          onClick={() => window.location.href = '/'}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Thank;
