import React from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import { HabitProvider } from "./context/HabitContext";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from "chart.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const App = () => {
  return (
    <HabitProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habit/:id" element={<Habits />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </HabitProvider>
  );
};

export default App;
