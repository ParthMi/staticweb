import React, { useEffect, useState } from "react";
import loader from '../images/loader/loader.gif';
import { NavLink } from "react-router-dom";

const ProductsCategory = () => {
  const [products, setProducts] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Process the data to get unique products per sub-category
        const subCategoryMap = new Map();
        const filteredProducts = [];

        data.forEach(product => {
          const { "sub-cat": subCat, category } = product;
          const key = `${category}-${subCat}`;

          if (!subCategoryMap.has(key)) {
            subCategoryMap.set(key, product);
            filteredProducts.push(product);
          }
        });

        const uniqueCategoriesSet = new Set(filteredProducts.map(product => product.category));
        setProducts(filteredProducts);
        setUniqueCategories(Array.from(uniqueCategoriesSet));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const categories = ['All', ...uniqueCategories];

  const handleActiveCategory = (category) => () => {
    setActive(category);
  }

  const filteredProducts = active === 'All'
    ? products
    : products.filter(product => product.category === active);
  const toTitleCase = (str) => {
    return str
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div>
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-4xl text-black max-xl:text-center">
            Our Products
          </h2>
          <div className="flex gap-2 my-4 overflow-x-auto pb-6">
            {categories.map((c, i) => (
              <span
                key={i}
                onClick={handleActiveCategory(c)}
                className={`${active === c ? 'category-filter-active' : 'category-filter'} cursor-pointer`}
              >
                {c}
              </span>
            ))}
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[20vh]">
              <img src={loader} className="h-[60px]" alt="loader" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <NavLink to={`/products/${product.category}/${product['sub-cat']}`}>
                  <div key={product.id} className="relative h-full bg-cover group rounded-3xl bg-center overflow-hidden mx-auto cursor-pointer filtered-product">
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                      <div className="flex items-center justify-between mb-2">
                        <h6 className="font-semibold text-base leading-7 text-black ">
                          {toTitleCase(product['sub-cat'])}
                        </h6>
                      </div>
                      <p className="text-[14px] font-bold text-gray-500 text-indigo-600">
                        {toTitleCase(product.category)}
                      </p>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsCategory;
