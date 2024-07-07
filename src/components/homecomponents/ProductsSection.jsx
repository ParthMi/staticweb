import React from 'react'

const ProductsSection = () => {
  return (
    <div className='home-image-grid p-4'>
         <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Our Products Range</h2>
            <p className="mt-1 text-gray-600">See how game-changing companies are making the most of every engagement with Preline.</p>
          </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
        </div>
      </div>
    </div>

  </div>
  )
}

export default ProductsSection
