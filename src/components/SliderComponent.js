import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import HeroComponent from "./HeroComponent";

function SliderComponent({ swiperClassName, sliderData }) {
  return (
    <>
      <Swiper
        className={`${swiperClassName} product-images-slider `}
        modules={[Pagination, EffectFade, Autoplay, Navigation]}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
      >
        {sliderData.map((item, idx) => {
          return (
            <SwiperSlide key={`item-${idx}`}>
              <HeroComponent
                height={item.height}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                backgroundImage={item.backgroundImage}
              />
            </SwiperSlide>
          );
        })}

        <div className="swiper-pagination " />

        <div className="swiper-button-next " />
        <div className="swiper-button-prev " />
      </Swiper>
    </>
  );
}

export default SliderComponent;
