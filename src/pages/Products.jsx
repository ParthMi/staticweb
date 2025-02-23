import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import './slider.css';
import 'swiper/css/autoplay';
import { IoResizeOutline, IoWaterOutline, IoFastFoodSharp } from "react-icons/io5";
import { LuMicrowave } from "react-icons/lu";
import { MdSevereCold } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router';
import loader from '../images/loader/loader.gif';
import ContactModal from './ContactModal';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Products = () => {
    const { category, subcategory } = useParams();
    const [products, setProducts] = useState([]);
    const [thumbsSwipers, setThumbsSwipers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selected, setSelected] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
  
    // Extract filter and product ID from query parameters
    const params = new URLSearchParams(location.search);
    const filter = params.get('filter');
    const productId = params.get('productId');

    const handleOpenEnquireModal = (product) => {
        setSelected(product)
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/product.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();

                const filteredProducts = data.filter(d => d['sub-cat'] === subcategory && d.category === category);
                setProducts(filteredProducts);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [category, subcategory]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <img src={loader} className="h-[60px]" alt="loader" />
            </div>
        );
    }

    const handleThumbsSwiper = (index, swiper) => {
        setThumbsSwipers(prevSwipers => {
            const updatedSwipers = [...prevSwipers];
            updatedSwipers[index] = swiper;
            return updatedSwipers;
        });
    };
    const handleBackClick = () => {
        // Navigate back with filter state
        const url = `/products?filter=${filter}&productId=${productId}`;
        window.history.replaceState({}, '', url); // Update the URL without creating a new history entry
        window.history.back(); // Go back to the previous page
      };

      return (
        <>
        <div className=' container md:mx-auto '>
            <div  className='!pt-8 ml-2 md:ml-0 flex items-center gap-1'>
                <span onClick={handleBackClick} className='cursor-pointer'><IoMdArrowRoundBack size={23}/></span>
                <span className='text-lg font-semibold cursor-pointer' onClick={handleBackClick}>Back</span>
            </div>
            </div>
            <div className="!mt-2 my-10 md:my-16 mx-2 md:mx-8">
                {products.length > 0 && products.map((pro, index) => (
                    <div key={index} className="md:mx-auto bg-[#e5e7eb] my-4 container rounded-[15px] border border-gray-100 text-gray-600 shadow-md">
                        <div className="relative p-4 md:p-8 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 justify-center">
                            <div className='bg-white h-min w-auto p-2 rounded-[18px] flex-col flex items-center justify-center '>
                                <div className="main-full-swiper aspect-square mx-auto w-[100%] md:max-w-[400px] flex items-center">
                                    <Swiper
                                        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
                                        spaceBetween={10}
                                        navigation={true}
                                        autoplay={true}
                                        thumbs={{ swiper: thumbsSwipers[index] && !thumbsSwipers[index].destroyed ? thumbsSwipers[index] : null }}
                                        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                                        className="main-swiper aspect-square"
                                    >
                                        {pro.image.map((image, imgIndex) => (
                                            <SwiperSlide className='product' key={imgIndex}>
                                                <img className="object-cover aspect-square w-full rounded-md shadow-lg" src={image} alt={`Product image ${imgIndex + 1}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className='mini-full-swiper'>
                                    <Swiper
                                        onSwiper={(swiper) => handleThumbsSwiper(index, swiper)}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="thumbs-swiper mt-0"
                                    >
                                        {pro.image.map((image, imgIndex) => (
                                            <SwiperSlide className='mini-swiper' key={imgIndex}>
                                                <img className="block h-[80px] w-[80px] object-cover rounded-[10px] shadow-lg cursor-pointer" src={image} alt={`Thumbnail ${imgIndex + 1}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                            <div className="relative p-8">
                                <div className="">
                                    <h2 className="mb-2 text-2xl font-black">{pro.name}</h2>
                                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
                                        {pro.category}
                                    </span>
                                </div>
                                <div className="mt-3 flex flex-col md:flex-row md:items-end">
                                    <div>
                                        <div><span className='font-bold'>Size : </span><span>{pro.size}</span></div>
                                        {pro.weight && <div><span className='font-bold'>Product weight : </span><span>{pro.weight}</span></div>}
                                        <div><span className='font-bold'>Packet : </span><span>{pro.packet}</span></div>
                                        <div><span className='font-bold'>Cartoon : </span><span>{pro.cartoon}</span></div>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-col sm:flex-row">
                                    <button onClick={e => handleOpenEnquireModal(pro)} className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-emerald-400 py-2 px-8 text-center text-white hover:bg-emerald-500">
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
                ))}
                <ContactModal isOpen={isOpen} onClose={onClose} selected={selected}/>
            </div>
        </>);
}

export default Products;
