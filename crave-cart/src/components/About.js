import React from 'react'

class About extends React.Component {

  render() {
    return (
      <div className="bg-white min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">
        About Us
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Welcome to <span className="font-semibold text-orange-500">Crave Cart</span> — your go-to destination for delicious meals delivered fast and fresh. Whether you're craving street food or gourmet cuisine, we’ve got you covered.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            We aim to revolutionize the way people experience food by connecting them with top-rated restaurants, local favorites, and hidden gems — all from the comfort of their home. Fast delivery, real-time tracking, and unbeatable variety are just the beginning.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>🚀 Lightning-fast delivery</li>
            <li>🍔 Thousands of restaurant partners</li>
            <li>📱 Easy-to-use mobile app</li>
            <li>💳 Secure payments & exclusive deals</li>
            <li>⭐ Real customer reviews & ratings</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-red-400 mb-2">Join the Foodie Revolution</h2>
        <p className="text-gray-600">
          Whether you're a hungry customer or a restaurant owner, <span className="font-medium text-orange-500">Crave Cart</span> is here to serve you. Download the app today and taste the future of food delivery.
        </p>
      </div>
    </div>
    );
  }
}

export default About;