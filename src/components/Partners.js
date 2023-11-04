import React from "react";
import { toAbsoluteUrl } from "../helpers/assetHelper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const partnersList = [
  {
    src: toAbsoluteUrl("/assets/partners/alvogen.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/partners/amniocen.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/partners/angelini.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/partners/braun.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/partners/himalaya.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/partners/ircon.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/partners/magistra.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/partners/mollers.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/partners/pharco.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/partners/roche.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/partners/rompharm.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/partners/zdrovit.jpg"),
  },
];

function Partners() {
  return (
    <div className=" max-w-full p-[20px] md:p-[40px] lg:py-[60px] ">
      <h1 className="text-primary-color text-center text-xl lg:text-2xl xl:text-3xl font-bold">
        Partenerii nostri
      </h1>
      <div className="max-w-7xl mx-auto py-[30px]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          effect="fade"
          loop={true}
          draggable
          breakpoints={{
            // when window width is >= 425px
            425: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {partnersList.map((img, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="w-full h-full  flex items-center justify-center">
                  <img alt={`partners-${idx}`} src={img.src} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Partners;
