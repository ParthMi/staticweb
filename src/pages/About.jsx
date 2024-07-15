import React from 'react'

const About = () => {
  return (
    <><div className="mx-auto text-center faq-bg p-4 md:p-10">
    <center>
      <h2 className="text-3xl max-w-xl py-6 text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        About Us
      </h2>
    </center>
    {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p> */}
  </div>
  <div>     
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                At Agastya International, we are dedicated to providing eco-friendly solutions through our plant-based disposable products, which are 100% biodegradable and compostable. Our commitment to sustainability helps reduce plastic waste and lowers the environmental footprint, contributing to a healthier planet.
              </p>
              <p className="text-gray-700">
                Our products are designed for durability and functionality, ensuring you don't have to compromise on quality while making an eco-conscious choice. We are at the forefront of innovation, continuously developing new and improved plant-based materials and products, including plates, cups, cutlery, and packaging solutions that meet the highest standards of performance and sustainability.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img className="rounded-lg shadow-lg" src="agastya/hcp1.jpg" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <img className="rounded-lg shadow-lg" src="https://dinearth.com/images/about-mission.jpg" alt="Our Mission" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Our mission is to revolutionize the disposable products industry by offering sustainable alternatives that do not harm the environment. We believe in creating a circular economy where products are designed to be reused, recycled, or composted, thus minimizing waste and conserving resources.
              </p>
              <p className="text-gray-700">
                We aim to inspire individuals and businesses to make environmentally responsible choices by providing high-quality, affordable, and accessible plant-based products. Together, we can make a significant impact on reducing plastic pollution and fostering a more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-700 mb-4">
                At the core of our company are the values of sustainability, innovation, and responsibility. We are committed to creating products that are not only environmentally friendly but also meet the highest standards of quality and performance.
              </p>
              <p className="text-gray-700">
                We believe in transparency and integrity in all our dealings, ensuring that our customers can trust us to deliver on our promises. We strive to foster a culture of continuous improvement, where we constantly seek to innovate and enhance our products and processes.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img className="rounded-lg shadow-lg" src="https://dinearth.com/images/about-values.jpg" alt="Our Values" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img className="rounded-full w-32 mx-auto mb-4" src="https://dinearth.com/images/team-member-1.jpg" alt="Team Member 1" />
                <h3 className="text-xl font-semibold text-center">John Doe</h3>
                <p className="text-gray-700 text-center">CEO</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img className="rounded-full w-32 mx-auto mb-4" src="https://dinearth.com/images/team-member-2.jpg" alt="Team Member 2" />
                <h3 className="text-xl font-semibold text-center">Jane Smith</h3>
                <p className="text-gray-700 text-center">COO</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img className="rounded-full w-32 mx-auto mb-4" src="https://dinearth.com/images/team-member-3.jpg" alt="Team Member 3" />
                <h3 className="text-xl font-semibold text-center">Michael Johnson</h3>
                <p className="text-gray-700 text-center">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default About
