import React, { useEffect, useState, useRef } from "react";
import loader from '../images/loader/loader.gif';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const ProductsCategory = () => {
  const [products, setProducts] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState('All');
  const containerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem('productsData');
      if (cachedData) {
        const data = JSON.parse(cachedData);
        processData(data);
      } else {
        try {
          const response = await fetch("/data/product.json");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          localStorage.setItem('productsData', JSON.stringify(data));
          processData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        }
      }
    };

    const processData = (data) => {
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
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Restore the saved scroll position and filter when the component mounts
    const queryParams = new URLSearchParams(location.search);
    const savedScrollPosition = queryParams.get('scrollPosition');
    const savedFilter = queryParams.get('selectedFilter');
    const productId = queryParams.get('productId');

    if (savedScrollPosition && containerRef.current) {
      // Delay scroll restoration by 100 milliseconds
      setTimeout(() => {
        containerRef.current.scrollTo({ top: parseInt(savedScrollPosition, 10), behavior: 'smooth' });
      }, 100);
    }

    if (savedFilter) {
      setActive(savedFilter);
    }

    if (productId && containerRef.current) {
      // Scroll to the product if productId is found
      setTimeout(() => {
        const productElement = document.getElementById(productId);
        if (productElement) {
          productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [location.search]); // Re-run effect on query parameter change

  const categories = ['All', ...uniqueCategories];

  const handleActiveCategory = (category) => () => {
    // Save the current scroll position and selected filter in query parameters
    const currentScrollPosition = containerRef.current ? containerRef.current.scrollTop : 0;
    navigate({
      search: `?scrollPosition=${currentScrollPosition}&selectedFilter=${category}`
    });

    // Update the active category state
    setActive(category);
  };

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
      <section className="py-8" ref={containerRef}>
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
                <NavLink
                  key={product.id}
                  to={`/products/${product.category}/${product['sub-cat']}?scrollPosition=${containerRef.current ? containerRef.current.scrollTop : 0}&selectedFilter=${active}&productId=${product.id}`}
                  onClick={() => {
                    // Save the current scroll position and filter before navigation
                    const currentScrollPosition = containerRef.current ? containerRef.current.scrollTop : 0;
                    navigate({
                      search: `?scrollPosition=${currentScrollPosition}&selectedFilter=${active}&productId=${product.id}`
                    });
                  }}
                >
                  <div id={product.id} className="relative h-full bg-cover group rounded-3xl bg-center overflow-hidden mx-auto cursor-pointer filtered-product">
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                      <div className="flex items-center justify-between mb-2">
                        <h6 className="font-semibold text-base leading-7 text-black">
                          {toTitleCase(product['sub-cat'])}
                        </h6>
                      </div>
                      <p className="text-[14px] font-bold text-indigo-600">
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




// import React, { useEffect, useState, useRef } from "react";
// import loader from '../images/loader/loader.gif';
// import { NavLink, useLocation } from "react-router-dom";

// const ProductsCategory = () => {
//   const [products, setProducts] = useState([]);
//   const [uniqueCategories, setUniqueCategories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [active, setActive] = useState('All');
//   const containerRef = useRef(null);
//   const location = useLocation();

//   useEffect(() => {
//     const fetchData = async () => {
//       const cachedData = localStorage.getItem('productsData');
//       if (cachedData) {
//         const data = JSON.parse(cachedData);
//         processData(data);
//       } else {
//         try {
//           const response = await fetch("/data/products.json");
//           if (!response.ok) {
//             throw new Error("Failed to fetch data");
//           }
//           const data = await response.json();
//           localStorage.setItem('productsData', JSON.stringify(data));
//           processData(data);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//           setIsLoading(false);
//         }
//       }
//     };

//     const processData = (data) => {
//       // Process the data to get unique products per sub-category
//       const subCategoryMap = new Map();
//       const filteredProducts = [];

//       data.forEach(product => {
//         const { "sub-cat": subCat, category } = product;
//         const key = `${category}-${subCat}`;

//         if (!subCategoryMap.has(key)) {
//           subCategoryMap.set(key, product);
//           filteredProducts.push(product);
//         }
//       });

//       const uniqueCategoriesSet = new Set(filteredProducts.map(product => product.category));
//       setProducts(filteredProducts);
//       setUniqueCategories(Array.from(uniqueCategoriesSet));
//       setIsLoading(false);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Restore the saved scroll position and filter when the component mounts
//     const savedScrollPosition = localStorage.getItem('scrollPosition');
//     const savedFilter = localStorage.getItem('selectedFilter');

//     if (savedScrollPosition && containerRef.current) {
//       // Restore scroll position
//       const container = containerRef.current;
//       requestAnimationFrame(() => {
//         container.scrollTo({ top: parseInt(savedScrollPosition, 10), behavior: 'instant' });
//       });
//     }

//     if (savedFilter) {
//       setActive(savedFilter);
//     }

//     // Clear localStorage after restoring
//     localStorage.removeItem('scrollPosition');
//     localStorage.removeItem('selectedFilter');
//   }, [location.key]); // Use location.key to re-run effect on navigation

//   const categories = ['All', ...uniqueCategories];

//   const handleActiveCategory = (category) => () => {
//     // Save the current scroll position and selected filter
//     if (containerRef.current) {
//       localStorage.setItem('scrollPosition', containerRef.current.scrollTop);
//     }
//     localStorage.setItem('selectedFilter', category);

//     // Update the active category state
//     setActive(category);
//   };

//   const filteredProducts = active === 'All'
//     ? products
//     : products.filter(product => product.category === active);

//   const toTitleCase = (str) => {
//     return str
//       .replace(/-/g, ' ')
//       .replace(/\b\w/g, (char) => char.toUpperCase());
//   };

//   return (
//     <div>
//       <section className="py-8" ref={containerRef}>
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <h2 className="font-manrope font-bold text-4xl text-black max-xl:text-center">
//             Our Products
//           </h2>
//           <div className="flex gap-2 my-4 overflow-x-auto pb-6">
//             {categories.map((c, i) => (
//               <span
//                 key={i}
//                 onClick={handleActiveCategory(c)}
//                 className={`${active === c ? 'category-filter-active' : 'category-filter'} cursor-pointer`}
//               >
//                 {c}
//               </span>
//             ))}
//           </div>
//           {isLoading ? (
//             <div className="flex justify-center items-center min-h-[20vh]">
//               <img src={loader} className="h-[60px]" alt="loader" />
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
//               {filteredProducts.map(product => (
//                 <NavLink
//                   key={product.id}
//                   to={`/products/${product.category}/${product['sub-cat']}`}
//                   onClick={() => {
//                     // Save the current scroll position and filter before navigation
//                     if (containerRef.current) {
//                       localStorage.setItem('scrollPosition', containerRef.current.scrollTop);
//                     }
//                     localStorage.setItem('selectedFilter', active);
//                   }}
//                 >
//                   <div className="relative h-full bg-cover group rounded-3xl bg-center overflow-hidden mx-auto cursor-pointer filtered-product">
//                     <img
//                       src={product.image[0]}
//                       alt={product.name}
//                       className="h-full w-full object-cover"
//                     />
//                     <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
//                       <div className="flex items-center justify-between mb-2">
//                         <h6 className="font-semibold text-base leading-7 text-black">
//                           {toTitleCase(product['sub-cat'])}
//                         </h6>
//                       </div>
//                       <p className="text-[14px] font-bold text-gray-500 text-indigo-600">
//                         {toTitleCase(product.category)}
//                       </p>
//                     </div>
//                   </div>
//                 </NavLink>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductsCategory;
