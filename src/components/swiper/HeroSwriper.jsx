import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

const HeroSwiper = () => {
    return (
        <>
        <style>
                {`
                .parallax-bg {
                    background-size: cover;
                    background-position: center;
                }
                .parallax-bg.home1 {
                    background-image: url('agastya/home5.jpg');
                }
                .parallax-bg.home2 {
                    background-image: url('agastya/home6.jpg');
                }
                    .parallax-bg.home3 {
                    background-image: url('agastya/home7.jpg');
                }
                .parallax-bg.home4 {
                    background-image: url('agastya/home8.jpg');
                }
                .parallax-bg.home5 {
                    background-image: url('agastya/home9.jpg');
                }
                @media (max-width: 768px) {
                    .parallax-bg.home1 {
                        background-image: url('agastya/homesm1.jpg'); /* Small device image for home2 */
                    }
                    .parallax-bg.home2 {
                        background-image: url('agastya/homesm2.jpg'); /* Small device image for home3 */
                    }
                    .parallax-bg.home3 {
                        background-image: url('agastya/homesm3.jpg'); /* Small device image for home2 */
                    }
                    .parallax-bg.home4 {
                        background-image: url('agastya/homesm4.jpg'); /* Small device image for home2 */
                    }
                    .parallax-bg.home5 {
                        background-image: url('agastya/homesm5.jpg'); /* Small device image for home2 */
                    }
                }
                `}
            </style>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                speed={2000}
                autoplay={{
                    delay: 1500,
                    stopOnLastSlide: false,
                }}
                parallax={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={true}
                modules={[Autoplay, Parallax, Pagination, Navigation]}
                className="mySwiper creative-showcase--slider"
            >
                <SwiperSlide
                    className='parallax-bg home1'
                    data-swiper-parallax="1800"
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
                            zIndex: 0
                        }}
                    ></div>
                    <div
                        className='main-slide-content'
                        style={{
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        <div
                            className=" text-2xl md:text-3xl lg:text-5xl"
                            data-swiper-parallax="-400%"
                        >
                            <p>
                            Serve in style, dispose with ease.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className='parallax-bg home2'
                    data-swiper-parallax="1800"
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
                            zIndex: 0
                        }}
                    ></div>
                    <div
                        className='main-slide-content'
                        style={{
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        <div
                            className=" text-2xl md:text-3xl lg:text-5xl"
                            data-swiper-parallax="-400%"
                        >
                            <p>
                            Your table’s best friend, your cleanup’s relief.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className='parallax-bg home3'
                    data-swiper-parallax="1800"
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
                            zIndex: 0
                        }}
                    ></div>
                    <div
                        className='main-slide-content'
                        style={{
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        <div
                            className=" text-2xl md:text-3xl lg:text-5xl"
                            data-swiper-parallax="-400%"
                        >
                            <p>
                            Smart solutions for modern entertaining.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className='parallax-bg home4'
                    data-swiper-parallax="1800"
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
                            zIndex: 0
                        }}
                    ></div>
                    <div
                        className='main-slide-content'
                        style={{
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        <div
                            className=" text-2xl md:text-3xl lg:text-5xl"
                            data-swiper-parallax="-400%"
                        >
                            <p>
                            Eco-Friendly Plates, Party-Ready Convenience.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className='parallax-bg home5'
                    data-swiper-parallax="1800"
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
                            zIndex: 0
                        }}
                    ></div>
                    <div
                        className='main-slide-content'
                        style={{
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        <div
                            className=" text-2xl md:text-3xl lg:text-5xl"
                            data-swiper-parallax="-400%"
                        >
                            <p>
                            Simplify Dining, One Plate at a Time!
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="swiper-button-wrapper creative-button--wrapper">
                    <div className="swiper-button-next" tabindex="0" role="button" aria-label="Next slide">
                        <div>
                            <span>Next Slide</span>
                        </div>
                        <div><GrFormNextLink size={20} /></div>
                    </div>
                    <div className="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide">
                        <div><GrFormPreviousLink size={20} /></div>
                        <div>
                            <span>Prev Slide</span>
                        </div>
                    </div>
                </div>
            </Swiper>
        </>
    );
}

export default HeroSwiper;

