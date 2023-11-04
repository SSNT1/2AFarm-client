import "./App.css";
import "swiper/css";
import "swiper/css/bundle";

import "./lang/i18n";

import Footer from "./components/Footer";
import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import SectionReverse from "./components/SectionReverse";
import SliderComp from "./components/SliderComp";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="font-montserrat">
      <Navbar />
      <div className="h-[55px]" />
      <SliderComp />

      <Section2
        wrapperClassName={"mt-20"}
        backgroundImage="https://images.pexels.com/photos/5998512/pexels-photo-5998512.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-5998512.jpg&fm=jpg"
        title="Cine suntem noi, 2A Farm? Afla acum!"
        description="You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:backdrop-opacity-60 to apply the backdrop-opacity-60 utility at only medium screen sizes and above."
        buttonText="INCEARA SI TU"
      />

      <SectionReverse
        title="Acestea sunt produsele noastre favorite"
        description="În prezent am ajuns la peste 100 angajați și peste 4500 de produse în portofoliu, deservind peste 1000 clienți din aproape toată România."
        description2="Deținem un depozit modern de medicamente (autorizat de Agenția Națională a Medicamentului) și o importanta flotă de transport pentru medicamente (15-25 °C și  2-8 °C, conform noului GDP). Prin logistica inovatoare proprie, asigurăm distribuția oricărui produs, în maxim 24h, către toți clienții 2AFarm."
        buttonText="INCEPE ACUM"
        sectionImage="https://c0.wallpaperflare.com/preview/261/782/412/tablets-drugs-pills-pharmacy.jpg"
      />

      <Section2
        type="reverse"
        contentType="secondary"
        backgroundImage="https://thehill.com/wp-content/uploads/sites/2/2019/10/ca_pharmacypillsfromshelf_102819getty.jpg?strip=1"
        title="Cine suntem noi, 2A Farm? Afla acum!"
        description="You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:backdrop-opacity-60 to apply the backdrop-opacity-60 utility at only medium screen sizes and above."
        buttonText="TRY IT"
      />

      <SectionReverse
        type="reverse"
        title="Acestea sunt produsele noastre favorite"
        description="În prezent am ajuns la peste 100 angajați și peste 4500 de produse în portofoliu, deservind peste 1000 clienți din aproape toată România."
        description2="Deținem un depozit modern de medicamente (autorizat de Agenția Națională a Medicamentului) și o importanta flotă de transport pentru medicamente (15-25 °C și  2-8 °C, conform noului GDP). Prin logistica inovatoare proprie, asigurăm distribuția oricărui produs, în maxim 24h, către toți clienții 2AFarm."
        buttonText="INCEPE ACUM"
        sectionImage="https://images.unsplash.com/photo-1642055514517-7b52288890ec?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <HeroComponent
        height={250}
        title="Ceva frumos"
        buttonText="CUMPARA ACUM"
        buttonVariant="secondary"
        backgroundImage="https://papers.co/wallpaper/papers.co-nd37-leaf-rain-green-nature-forest-29-wallpaper.jpg"
      />
      <Partners />

      <Footer />
    </div>
  );
}

export default App;
