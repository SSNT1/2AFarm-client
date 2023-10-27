import "./App.css";
import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import SectionReverse from "./components/SectionReverse";

function App() {
  return (
    <div>
      <Navbar />
      <div className="h-[55px]" />
      <HeroComponent
        height={800}
        title="2A FARM S.R.L"
        description="Aceasta este compania noastra "
        buttonText="AFLĂ MAI MULTE"
        backgroundImage="https://c0.wallpaperflare.com/path/896/663/732/adult-biology-chemical-chemist-7a2f2b5e6a080c94b1045e9d9ddcf101.jpg"
      />

      <Section2
        wrapperClassName={"mt-32"}
        backgroundImage="https://images.pexels.com/photos/5998512/pexels-photo-5998512.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-5998512.jpg&fm=jpg"
        title="Cine suntem noi, 2A Farm? Afla acum!"
        description="You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:backdrop-opacity-60 to apply the backdrop-opacity-60 utility at only medium screen sizes and above."
        buttonText="INCEARA SI TU"
      />

      <SectionReverse
        type="reverse"
        title="Acestea sunt produsele noastre favorite"
        description="În prezent am ajuns la peste 100 angajați și peste 4500 de produse în portofoliu, deservind peste 1000 clienți din aproape toată România."
        description2="Deținem un depozit modern de medicamente (autorizat de Agenția Națională a Medicamentului) și o importanta flotă de transport pentru medicamente (15-25 °C și  2-8 °C, conform noului GDP). Prin logistica inovatoare proprie, asigurăm distribuția oricărui produs, în maxim 24h, către toți clienții 2AFarm."
        buttonText="INCEPE ACUM"
        sectionImage="https://c0.wallpaperflare.com/preview/261/782/412/tablets-drugs-pills-pharmacy.jpg"
      />

      <SectionReverse
        title="Acestea sunt produsele noastre favorite"
        description="În prezent am ajuns la peste 100 angajați și peste 4500 de produse în portofoliu, deservind peste 1000 clienți din aproape toată România."
        description2="Deținem un depozit modern de medicamente (autorizat de Agenția Națională a Medicamentului) și o importanta flotă de transport pentru medicamente (15-25 °C și  2-8 °C, conform noului GDP). Prin logistica inovatoare proprie, asigurăm distribuția oricărui produs, în maxim 24h, către toți clienții 2AFarm."
        buttonText="INCEPE ACUM"
        sectionImage="https://images.unsplash.com/photo-1642055514517-7b52288890ec?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <HeroComponent
        height={250}
        title="Ceva foarte frumos"
        buttonText="CUMPARA ACUM"
        buttonVariant="secondary"
        backgroundImage="https://i.pinimg.com/originals/0c/14/d7/0c14d76df3209fab290e7cf5b22f7644.jpg"
      />
    </div>
  );
}

export default App;
