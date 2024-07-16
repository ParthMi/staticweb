import React from 'react'
import { NavLink } from 'react-router-dom';

const BlogSection = () => {
  return ( 
    <div className="max-w-[65rem] px-4  py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">The Blog</h2>
            <p className="mt-1 text-gray-600">See how game-changing companies are making the most of every engagement with Preline.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <span className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-2" href="#">
              <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src="agastya/blog/blog11.jpg" alt="" />
              </div>
              <div className="my-4">
                <h3 className="text-xl font-semibold text-gray-800">
                CLIMATE CONTROL & HOW THE EARTH IS CHANGING DURING COVID - SUSTAINABLE LIVING & ECO FRIENDLY PACKAGING
                </h3>
                <p className="mt-5 text-gray-600">
                  While the world comes to grips with the Corona Virus and hopes for a cure, there should be a weather eye that needs to be placed on Climate Change and the sheer ill effects of it on the planet. Climate change is happening. It is real and it is dangerous.
                </p>
              </div>
            </span>

            <span className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-2" href="#">
              <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src="agastya/blog/blog7.jpg" alt="" />
              </div>
              <div className="my-4">
                <h3 className="text-xl font-semibold text-gray-800">
                ECO FRIENDLY TABLEWARE GETS COVERED AS COMPANY OF THE YEAR - GREEN PRODUCTS - CEO INSIGHTS
                </h3>
                <p className="mt-5 text-gray-600">
                  A greater awareness for improved sustainability and climate change action has finally resulted in the regulation and banning of single-use plastics access several places the world over. And not a minute too soon.
                </p>
              </div>
            </span>

            <span className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-2" href="#">
              <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src="agastya/blog/blog12.jpg" alt="" />
              </div>
              <div className="my-4">
                <h3 className="text-xl font-semibold text-gray-800">
                THE FUTURE: ECO FRIENDLY PACKAGING FOR SCHOOLS, HOMES, LARGE BUSINESSES
                </h3>
                <p className="mt-5 text-gray-600">
                Sustainable living is not just a catchword any longer. It has to become a way of life.and it needs to become a way of life for more than a couple of future generations to follow. The need for sustainable living is not just in life choices. It is a conscious decision that we need to make for lifestyle choices as well. 
                </p>
              </div>
            </span>
          </div>

          <div className="mt-12 text-center">
            <span className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
              <NavLink to="/blog">Read more</NavLink>
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </span>
          </div>
        </div>
  )
}

export default BlogSection
