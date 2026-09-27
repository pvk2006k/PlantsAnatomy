import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import PlantAnatomyPage from "./pages/PlantAnatomyPage";
import PhotosynthesisPage from "./pages/PhotosynthesisPage";
import PlantImportancePage from "./pages/PlantImportancePage";
import WaterCyclePage from "./pages/WaterCyclePage";
import DeforestationPage from "./pages/DeforestationPage";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plant-anatomy" element={<PlantAnatomyPage />} />
            <Route path="/photosynthesis" element={<PhotosynthesisPage />} />
            <Route path="/plant-importance" element={<PlantImportancePage />} />
            <Route path="/water-cycle" element={<WaterCyclePage />} />
            <Route path="/deforestation" element={<DeforestationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
