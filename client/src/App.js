import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import PetDetailsPage from "./page/PetDetailsPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets/:id" element={<PetDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
