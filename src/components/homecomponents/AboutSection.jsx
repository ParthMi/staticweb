import React from 'react'

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
                  src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                  alt=""
                  className="w-full h-full sm:h-[250px] object-cover rounded-2xl"
                />
              </div>
              <div className="py-3 sm:py-4">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                  alt=""
                  className="w-full h-full sm:h-[250px] object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <div className="relative z-0 my-4">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
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
              className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]"
            >
              Make your customers happy by giving services.
            </h2>
            <p className="mb-5 text-base text-body-color dark:text-dark-6">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less.
            </p>
            <p className="mb-8 text-base text-body-color dark:text-dark-6">
              A domain name is one of the first steps to establishing your
              brand. Secure a consistent brand image with a domain name that
              matches your business.
            </p>
            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</button>

          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection
