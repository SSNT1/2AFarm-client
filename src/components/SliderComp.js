import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import HeroComponent from "./HeroComponent";

function SliderComp({ swiperClassName }) {
  return (
    <>
      <Swiper
        className={`${swiperClassName} `}
        modules={[Pagination, EffectFade, Autoplay, Navigation]}
        pagination={{
          el: ".swiper-pagination",
          type: "progressbar",
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
        <SwiperSlide>
          <HeroComponent
            height={800}
            title="2A FARM S.R.L"
            description="Aceasta este compania noastra "
            buttonText="AFLĂ MAI MULTE"
            backgroundImage="https://tt152.files.keap.app/tt152/2799b797-d1db-4128-bbc8-af43290f881c"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroComponent
            height={800}
            title="Tot ce trebuie sa stii despre noi"
            buttonText="DESCOPERA!"
            backgroundImage="https://c0.wallpaperflare.com/path/896/663/732/adult-biology-chemical-chemist-7a2f2b5e6a080c94b1045e9d9ddcf101.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroComponent
            height={800}
            title="Cei mai buni din Romania"
            description="Descopera lumea 2A Farm si bucura-te de produsele noastre! "
            backgroundImage="https://wp.inews.co.uk/wp-content/uploads/2023/01/SEI_139961276.jpg"
          />
        </SwiperSlide>

        <div className="swiper-pagination" />
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </Swiper>
    </>
  );
}

export default SliderComp;
