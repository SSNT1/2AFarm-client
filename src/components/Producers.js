import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { toAbsoluteUrl } from "../helpers/assetHelper";
import { useTranslation } from "react-i18next";

const producersList = [
  {
    src: toAbsoluteUrl("/assets/producers/ABBOTT.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ACTAVIS.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ADYA.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ALCON.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ALVOGEN.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/AMNIOCEN.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ANGELINI.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ANTIBIOTICE.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ASTRA-ZENECA.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/AUROBINDO.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/B-BRAUN.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/BAYER.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/BERLIN-CHEMIE.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/BIOEEL.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/BIOFARM.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/BOEHRINGER.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/BOIRON.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/Bristol-Myers-Squibb.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/EGIS.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/EIPICO-MED.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ENGELHARD.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/EVER-NEURO-PHARMA.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/GEDEON-RICHTER.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/gmpeng-gsk.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/HELCOR.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/HIMALAYA.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/HYLLAN-PHARMA.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/IRCON.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/JOHNSON-JOHNSON.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/KRKA.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/LABORMED.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/LEO-PHARMA.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/LOGO-standard.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/MAGISTRA.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/MCNEIL.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/MERCK.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/MOLLERS.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/NOVARTIS.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/novartis-sandoz.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/NOVO-NORDISK.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/OMEGA-PHARMA.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/PFIZER.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/PHARCO.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/POLISANO.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/RECKITT.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ROMPHARM.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ROWA-WAGNER.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/SANOFI.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/SECOM.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/SERVIER.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/SIFI.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/SINTOFARM.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/SODIMED.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/STADA-HEMOFARM.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/SUNWAVE.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/TERAPIA.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/VIM-SPECTRUM.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/VITABIOTICS.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/VITACARE.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/WALMARK.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/WORWAG.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ZDROVIT.jpg"),
  },
  {
    src: toAbsoluteUrl("/assets/producers/ZENTIVA.jpg"),
  },
];

function Producers() {
  const { t: translate } = useTranslation();

  return (
    <div className="border-y-2 border-primary-color max-w-full p-[20px] md:p-[40px] lg:py-[60px] ">
      <h2 className="text-primary-color text-center text-xl lg:text-2xl xl:text-3xl font-bold">
        {translate("producers_title")}
      </h2>
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
          {producersList.map((img, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="w-full h-full  flex items-center justify-center">
                  <img alt={`producers-${idx}`} src={img.src} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Producers;
