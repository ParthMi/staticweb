import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormNextLink,GrFormPreviousLink  } from "react-icons/gr";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

const HeroSwriper = () => {
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
                    delay: 1500, stopOnLastSlide: false,
                }}
                parallax={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                // navigation={true}
                pagination={true}
                modules={[Autoplay, Parallax, Pagination, Navigation]}
                className="mySwiper creative-showcase--slider"
            >
                <SwiperSlide className='parallax-bg' style={{
                    backgroundImage: 'url(https://picsum.photos/200/301)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                    data-swiper-parallax="1800">
                    <div className='main-slide-content'>
                        <div className="title" data-swiper-parallax="-200%">
                            Our Products are
                        </div>
                        <div className="text" data-swiper-parallax="-400%">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div></div>
                </SwiperSlide>
                <SwiperSlide className='parallax-bg' style={{
                    backgroundImage: 'url(https://picsum.photos/1000/1201)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                    data-swiper-parallax="1800">
                    <div className='main-slide-content'>
                        <div className="title" data-swiper-parallax="-200%">
                            Our Products are
                        </div>
                        <div className="text" data-swiper-parallax="-400%">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='parallax-bg' style={{
                    backgroundImage: 'url(https://picsum.photos/200/301)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                    data-swiper-parallax="1800">      <div className='main-slide-content'>    <div className="title" data-swiper-parallax="-200%">
                        Our Products are
                    </div >
                        <div className="text" data-swiper-parallax="-400%">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div></div>
                </SwiperSlide>

                <div class="swiper-button-wrapper creative-button--wrapper">
                    <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide">
                        <div>
                            <span>Next Slide</span>
                        </div>
                        <div><GrFormNextLink size={20}/></div>
                    </div>
                    <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide">
                        <div><GrFormPreviousLink size={20}/></div>
                        <div>
                            <span>Prev Slide</span>
                        </div>
                    </div>
                </div>
            </Swiper>
        </>
    );
}

export default HeroSwriper
