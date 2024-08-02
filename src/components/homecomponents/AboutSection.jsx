import React from 'react'
import { NavLink } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section
    className="overflow-hidden px-5 py-8 bg-gray-200 dark:bg-dark"
  >
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between -mx-4">
        <div className="w-full px-4 lg:w-6/12">
          <div className="flex items-center -mx-3 sm:-mx-4">
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <div className="py-3 sm:py-4">
                <img
                  src="agastya/habout3.jpg"
                  alt=""
                  className="w-full h-full sm:h-[250px] object-cover rounded-2xl"
                />
              </div>
              <div className="py-3 sm:py-4">
                <img
                  src="agastya/habout2.jpg"
                  alt=""
                  className="w-full h-full sm:h-[250px] object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <div className="relative z-0 my-4">
                <img
                  src="agastya/habout1.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div className="mt-10 lg:mt-0">
            <span className="block mb-4 text-lg font-semibold text-primary">
              Why Choose Us
            </span>
            <h2
              className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]"
            >
              Make your customers happy by giving services.
            </h2>
            <p className="mb-5 text-base text-body-color dark:text-dark-6">
            At Agastya International, we are dedicated to providing eco-friendly solutions through our plant-based disposable products, which are 100% biodegradable and compostable. Our commitment to sustainability helps reduce plastic waste and lowers the environmental footprint, contributing to a healthier planet
            </p>
            <p className="mb-8 text-base text-body-color dark:text-dark-6">
            Our products are designed for durability and functionality, ensuring you don't have to compromise on quality while making an eco-conscious choice. We are at the forefront of innovation, continuously developing new and improved plant-based materials and products, including plates, cups, cutlery, and packaging solutions that meet the highest standards of performance and sustainability. 
            </p>
            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <NavLink to="/aboutus">Learn More</NavLink>
            </button>

          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection
