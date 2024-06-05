import {  useRef } from 'react';
import { ReactComponent as LeftArrow } from '../../assets/images/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/images/right-arrow.svg';
import {Swiper} from 'swiper/react'

import "swiper/css";

const Carousel = ({children}) => {

  const swiperRef = useRef(null)
  const movePrev = () => {
    swiperRef.current.swiper.slidePrev()
  };

  const moveNext = () => {
    swiperRef.current.swiper.slideNext()
  };


  return (
    <div className="my-12 mx-auto">
      <div className="flex flex-row justify-end mb-6">
        <button
          onClick={movePrev}
          className="hover:bg-grey-900/75 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed  p-0 m-0 transition-all ease-in-out duration-300"
        >
          <LeftArrow className="text-primary" alt="left-arrow"/>
        </button>
        <button
          onClick={moveNext}
          className="hover:bg-grey-900/75 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed  p-0 m-0 transition-all ease-in-out duration-300"
        >
          <RightArrow className="text-primary" alt="right-arrow" />
        </button>
      </div>
        <div className="min-h-0 min-w-0">
          <Swiper  ref={swiperRef}
                   mousewheel={true}
                   spaceBetween={24}
                   breakpoints={{
                     1536: {
                       slidesPerView: 5
                     },
                     1280: {
                       slidesPerView: 4
                     },
                     1024: {
                       slidesPerView: 3
                     },
                     640: {
                       slidesPerView: 2
                     },
                     120: {
                       slidesPerView: 1
                     }
                   }}
                  slidesPerView={4} >
            {children}
          </Swiper>
        </div>
    </div>
  );
};

export default Carousel;
