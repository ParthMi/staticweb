import React, { useState } from "react";

const ProductsCategory = () => {
  const [active, setActive] = useState('All');
  const categories = ['All', 'Sugarcane Based', 'Plant Based'];

  const handleActiveCategory = (item) => () => {
    setActive(item);
  }

  return (
    <div>
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-4xl text-black max-xl:text-center">
            Our Products
          </h2>
          <div className="flex gap-2 my-4 overflow-x-auto pb-6">
            {categories.map((c, i) => {
              return <span key={i} onClick={handleActiveCategory(c)} className={`${active === c ? 'category-filter-active' : 'category-filter'} `}>{c}</span>
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-3 xl:grid-cols-4 gap-8">
            <span className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto  xl:mx-auto cursor-pointer">
              <img
                src="https://pagedone.io/asset/uploads/1700731972.png"
                alt="Jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Trendy Jacket
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  Women's Winter Wear
                </p>
              </div>
            </span>
            <span className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto  xl:mx-auto cursor-pointer">
              <img
                src="https://pagedone.io/asset/uploads/1700731972.png"
                alt="Jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Trendy Jacket
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  Women's Winter Wear
                </p>
              </div>
            </span>
            <span className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto  xl:mx-auto cursor-pointer">
              <img
                src="https://pagedone.io/asset/uploads/1700731972.png"
                alt="Jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Trendy Jacket
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  Women's Winter Wear
                </p>
              </div>
            </span>
            <span className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto  xl:mx-auto cursor-pointer">
              <img
                src="https://pagedone.io/asset/uploads/1700731972.png"
                alt="Jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Trendy Jacket
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  Women's Winter Wear
                </p>
              </div>
            </span>
            <span className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto  xl:mx-auto cursor-pointer">
              <img
                src="https://pagedone.io/asset/uploads/1700731972.png"
                alt="Jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Trendy Jacket
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  Women's Winter Wear
                </p>
              </div>
            </span>
            <span className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto  xl:mx-auto cursor-pointer">
              <img
                src="https://pagedone.io/asset/uploads/1700731972.png"
                alt="Jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Trendy Jacket
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  Women's Winter Wear
                </p>
              </div>
            </span>
            <span className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto  xl:mx-auto cursor-pointer">
              <img
                src="https://pagedone.io/asset/uploads/1700731972.png"
                alt="Jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Trendy Jacket
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  Women's Winter Wear
                </p>
              </div>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsCategory;
