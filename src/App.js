import "./App.css";
import "swiper/css";
import "swiper/css/bundle";

import "./lang/i18n";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Career from "./pages/Career";

function App() {
  return (
    <div className="font-montserrat">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
