import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function SwiperEffect({ newPetList }) {
  return (
    <>
      <h1 className="recommend">Recommend</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        // modules={[Navigation]}
        className="mySwiper"
      >
        <div className="pets">
          {newPetList.map((pet, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="pet_each">
                  <div className="pet--left">
                    <h3>Name: {pet.Name}</h3>
                    <p>Species: {pet.Species}</p>
                    <p>Age: {pet.Age}</p>
                    <Link to={`/pets/${pet.PetID}`}>
                      <button className="pet_info_btn">About Me</button>
                    </Link>
                  </div>
                  <div className="pet_img_wrapper">
                    <img className="pet_img_api" src={`/adoptr/${pet.Image}`} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </>
  );
}
