import "./App.css";
import "swiper/css";
import "swiper/css/bundle";

import "./lang/i18n";

import Footer from "./components/Footer";
import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import { useTranslation } from "react-i18next";
import FullBgWithContentComponent from "./components/FullBgWithContentComponent";
import ImageAndContentComponent from "./components/ImageAndContentComponent";
import SliderComponent from "./components/SliderComponent";
import Producers from "./components/Producers";
import { Element } from "react-scroll";
import Contact from "./components/Contact";

function App() {
  const { t: translate } = useTranslation();

  return (
    <div className="font-montserrat">
      <Navbar
        ordersButtonText={translate("navbar_orders")}
        navbarLinks={[
          {
            name: translate("navbar_link_1"),
            href: "home",
          },
          {
            name: translate("navbar_link_2"),
            href: "about",
          },
          {
            name: translate("navbar_link_3"),
            href: "contact",
          },
        ]}
      />
      <div className="h-[55px]" />
      <Element name="home">
        <SliderComponent
          sliderData={[
            {
              height: 800,
              title: translate("hero_title_1"),
              description: translate("hero_description_1"),
              buttonText: translate("hero_button_1"),
              backgroundImage:
                "https://tt152.files.keap.app/tt152/2799b797-d1db-4128-bbc8-af43290f881c",
            },
            {
              height: 800,
              title: translate("hero_title_2"),
              description: translate("hero_description_2"),
              buttonText: translate("hero_button_2"),
              backgroundImage:
                "https://c0.wallpaperflare.com/path/896/663/732/adult-biology-chemical-chemist-7a2f2b5e6a080c94b1045e9d9ddcf101.jpg",
            },
            {
              height: 800,
              title: translate("hero_title_3"),
              description: translate("hero_description_3"),
              buttonText: translate("hero_button_3"),
              backgroundImage:
                "https://wp.inews.co.uk/wp-content/uploads/2023/01/SEI_139961276.jpg",
            },
          ]}
        />
      </Element>

      <Element name="about">
        <FullBgWithContentComponent
          wrapperClassName={"mt-20"}
          backgroundImage="https://images.pexels.com/photos/5998512/pexels-photo-5998512.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-5998512.jpg&fm=jpg"
          title={translate("full_bg_component_title_1")}
          description={translate("full_bg_component_description_1")}
          buttonText={translate("full_bg_component_button_1")}
        />
      </Element>

      <ImageAndContentComponent
        title={translate("image_and_content_component_title_1")}
        description={translate("image_and_content_component_description_1")}
        description2={translate("image_and_content_component_description2_1")}
        buttonText={translate("image_and_content_component_button_1")}
        sectionImage="https://c0.wallpaperflare.com/preview/261/782/412/tablets-drugs-pills-pharmacy.jpg"
      />

      <FullBgWithContentComponent
        contentBackground={"bg-transparent backdrop-blur-[3px]"}
        type="reverse"
        contentType="secondary"
        backgroundImage="https://thehill.com/wp-content/uploads/sites/2/2019/10/ca_pharmacypillsfromshelf_102819getty.jpg?strip=1"
        title={translate("full_bg_component_title_2")}
        description={translate("full_bg_component_description_2")}
        buttonText={translate("full_bg_component_button_2")}
      />

      <ImageAndContentComponent
        type="reverse"
        title={translate("image_and_content_component_title_2")}
        description={translate("image_and_content_component_description_2")}
        description2={translate("image_and_content_component_description2_2")}
        buttonText={translate("image_and_content_component_button_2")}
        sectionImage="https://images.unsplash.com/photo-1642055514517-7b52288890ec?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Partners />

      <HeroComponent
        wrapperClassName="my-2"
        height={250}
        title={translate("hero_title_down_section")}
        description={translate("hero_description_down_section")}
        buttonText={translate("hero_button_down_section")}
        buttonVariant="secondary"
        backgroundImage="https://papers.co/wallpaper/papers.co-nd37-leaf-rain-green-nature-forest-29-wallpaper.jpg"
      />

      <Producers />

      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
