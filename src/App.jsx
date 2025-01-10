import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import { HabitProvider } from "./context/HabitContext";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const App = () => {
  return (
    <HabitProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habit/:id" element={<Habits />} />
      </Routes>
    </HabitProvider>
  );
};

export default App;
