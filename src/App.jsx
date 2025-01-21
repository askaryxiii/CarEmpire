import Navbar from "./components/navbar/Navbar";
import CarModel from "./pages/CarModel";
import EditCar from "./pages/EditCar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-BgGrey">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:id" element={<CarModel />} />
        <Route path="/car/edit/:id" element={<EditCar />} />
      </Routes>
    </div>
  );
}

export default App;
