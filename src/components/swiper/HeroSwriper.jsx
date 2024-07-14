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
                    className='parallax-bg'
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundImage: 'url(agastya/home2.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
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
                                We believe in combining sustainability with exceptional quality.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className='parallax-bg'
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundImage: 'url(agastya/home3.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
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
                                Reduce plastic waste and create a healthier planet for future generations.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className='parallax-bg'
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundImage: 'url(agastya/home1.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
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
                                Customer satisfaction is at the heart of what we do.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className='parallax-bg'
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundImage: 'url(agastya/home4.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
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
                                Offers cutting-edge products designed to meet the highest standards.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className='parallax-bg'
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundImage: 'url(agastya/home5.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
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
                                Emphasizing sustainability, quality, innovation, safety, and customer satisfaction.
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
