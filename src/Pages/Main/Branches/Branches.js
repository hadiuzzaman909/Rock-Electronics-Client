import "./Branches.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import h2 from '../../../Images/brand/h2.png'
import l from '../../../Images/brand/l.png'
import p from '../../../Images/brand/p.png'
import htc from '../../../Images/brand/htc.png'
import s3 from '../../../Images/brand/s3.png'
import sa from '../../../Images/brand/sa.webp'
import ca from '../../../Images/brand/ca.png'
import hav from '../../../Images/brand/hav.png'
import de from '../../../Images/brand/de.png'
import lo from '../../../Images/brand/lo.png'
import ni2 from '../../../Images/brand/ni2.png'
import hua from '../../../Images/brand/hua.png'
import pan from '../../../Images/brand/pan.png'
import len from '../../../Images/brand/len.png'


const Branches = () => {
    return (
        <>
        <div>
            <h1 className="text-center mt-5 mb-5">Brands</h1>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <SwiperSlide><img className="slider_img" src={l} alt=''></img></SwiperSlide>

          <SwiperSlide><img className="slider_img" src={htc} alt=''></img></SwiperSlide>
          <SwiperSlide><img className="slider_img" src={sa} alt=''></img></SwiperSlide>

          <SwiperSlide> <img className="slider_img" src={ca} alt=''></img></SwiperSlide>


          <SwiperSlide><img className="slider_img" src={hav} alt=''></img></SwiperSlide>
          
          <SwiperSlide><img className="slider_img" src={s3} alt=''></img></SwiperSlide>

          <SwiperSlide><img className="slider_img" src={de} alt=''></img></SwiperSlide>

          <SwiperSlide> <img className="slider_img" src={lo} alt=''></img></SwiperSlide>


          <SwiperSlide><img className="slider_img" src={hua} alt=''></img></SwiperSlide>
          <SwiperSlide><img className="slider_img" src={ni2} alt=''></img></SwiperSlide>
          <SwiperSlide><img className="slider_img" src={p} alt=''></img></SwiperSlide>



        </Swiper>
      </>

    );
};

export default Branches;