import React from 'react'

const ProductsSection = () => {
  return (
    <div className='home-image-grid p-4'>
         <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Our Products Range</h2>
            <p className="mt-1 text-gray-600">See how game-changing companies are making the most of every engagement with Preline.</p>
          </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 " >
      <div className="grid gap-4">
        <div className="aspect-w-1 aspect-h-1 hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic1.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1  hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic11.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1  hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic7.jpg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="aspect-w-1 aspect-h-1  hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic10.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1  hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic2.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1  hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic6.jpg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="aspect-w-1 aspect-h-1  hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic4.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1  hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic5.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1  hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic3.jpg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="aspect-w-1 aspect-h-1  hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic12.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1  hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic8.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1  hover:opacity-85">
          <img className="object-cover rounded-lg" src="agastya/homecatlog/pic9.jpg" alt="" />
        </div>
      </div>
    </div>

  </div>
  )
}

export default ProductsSection
