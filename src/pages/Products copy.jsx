import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import './slider.css';
import 'swiper/css/autoplay';
import { IoResizeOutline } from "react-icons/io5";
import { IoWaterOutline } from "react-icons/io5";
import { LuMicrowave } from "react-icons/lu";
import { MdSevereCold } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { useParams } from 'react-router';
import loader from '../images/loader/loader.gif';

const Products = () => {
    const { category, subcategory } = useParams();
    const [products, setProducts] = useState([]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/products.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();

                const filteredProducts = data.filter((d) => { if ((d['sub-cat'] === subcategory) && d.category === category) { return d } });
                setProducts(filteredProducts);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
          <div className="flex justify-center items-center min-h-screen">
            <img src={loader} className="h-[60px]" alt="loader"/>
          </div>
        );
      }
    
    return (
        <div className="my-8 md:my-16 mx-1">
                {products.length>0 && products.map((pro, index) => {
                    return (
            <div className="md:mx-auto bg-[#e5e7eb] my-4  container rounded-[15px] border border-gray-100 text-gray-600 shadow-md">
                        <div className="relative p-4 md:p-8 container mx-auto grid grid-cols-1 md:grid-cols-2">
                            <div className='flex bg-[#fff] p-2 rounded-[18px] flex-col'>
                                <div className="main-full-swiper mx-auto w-[100%] flex items-center">
                                    <Swiper
                                        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
                                        spaceBetween={10}
                                        navigation={true}
                                        autoplay={true}
                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                                        className="main-swiper"
                                    >
                                        {pro.image.map((image, index) => (
                                            <SwiperSlide className='product' key={index}>
                                                <img className="object-cover w-full h-full rounded-md shadow-lg" src={image} alt={`Product image ${index + 1}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className='mini-full-swiper'>
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        loop={true}
                                        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                                        className="thumbs-swiper mt-8"
                                        autoplay={{ delay: 3000, disableOnInteraction: false }}

                                    >
                                        {pro.image.map((image, index) => (
                                            <SwiperSlide className='mini-swiper' key={index}>
                                                <img className="block h-[80px] w-[80px] object-cover rounded-[10px] shadow-lg cursor-pointer" src={image} alt={`Thumbnail ${index + 1}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                            <div className="relative p-8">
                                <div className="">
                                    <h2 className="mb-2 text-2xl font-black">{pro.name}</h2>
                                    <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">{pro.category}</span>
                                </div>
                                <div className="mt-3 flex flex-col md:flex-row md:items-end">
                                    <div>
                                        <div><span className='font-bold'>Size : </span><span>{pro.size}</span></div>
                                        <div><span className='font-bold'>Dimension : </span><span>{pro.dimension}</span></div>
                                        <div><span className='font-bold'>Packet : </span><span>{pro.packet}</span></div>
                                        <div><span className='font-bold'>Cartoon : </span><span>{pro.cartoon}</span></div>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-col sm:flex-row">
                                    <button className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-emerald-400 py-2 px-8 text-center text-white hover:bg-emerald-500">
                                        ENQUIRE NOW
                                    </button>
                                </div>
                                <div className='md:pt-10 w-full gap-3 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 '>
                                    <span className='main-product-icon'><span className='icon'><IoWaterOutline /></span><span className="text">Water & Oil Resistance</span></span>
                                    <span className='main-product-icon'><span className='icon'><LuMicrowave /></span><span className="text">Microwave Safe</span></span>
                                    <span className='main-product-icon'><span className='icon'><MdSevereCold /></span><span className="text">Freezer Friendly</span></span>
                                    <span className='main-product-icon'><span className='icon'><FaLeaf /></span><span className="text">Renewable Resource</span></span>
                                    <span className='main-product-icon'><span className='icon'><IoFastFoodSharp /></span><span className="text">Food Grade</span></span>
                                </div>
                            </div>
                        </div>
            </div>
                    )
                })}
        </div>
    );
}

export default Products;
