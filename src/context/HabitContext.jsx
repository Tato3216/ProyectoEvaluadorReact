import { createContext, useEffect, useReducer } from "react";

const HabitContext = createContext();

const getInitialHabits = () => {
  try {
    const habits = JSON.parse(localStorage.getItem("habits"));
    return Array.isArray(habits) ? habits : [];
  } catch (error) {
    console.warn("Borrando datos corruptos en localStorage...");
    localStorage.removeItem("habits");
    return [];
  }
};

const initialHabits = getInitialHabits();
// const initialHabits = [
//   { id: 1, name: "Ejercicio", goal: 5, category: "Salud", progress: [true, true, false, true, false, true, false] },
//   { id: 2, name: "Leer", goal: 7, category: "Trabajo", progress: [true, true, true, true, true, true, true] },
//   { id: "3", name: "Leer libro", goal: 6, progress: [0, 1, 2, 3, 4, 5, 6],},
//   { id: "4", name: "Meditar", goal: 7, progress: [1, 2, 3, 4, 5, 6, 7], }
// ];

const habitReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HABIT":
      return [...state, action.payload];
      // return [
      //   ...state,
      //   {
      //     ...action.payload,
      //     progress: Array(7).fill(0), // Asegurando que progress se inicialice con 7 ceros
      //   },
      // ];
    case "UPDATE_HABIT":
      return state.map((habit) =>
        habit.id === action.payload.id ? { ...habit, progress: action.payload.progress } : habit
        // habit.id === action.payload.id ? action.payload : habit  
      );
    case "DELETE_HABIT":
      return state.filter((habit) => habit.id !== action.payload);
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const HabitProvider = ({ children }) => {
  const [habits, dispatch] = useReducer(habitReducer, initialHabits);
  // const [habits, dispatch] = useReducer(habitReducer, []);

  useEffect(() => {
    try {
      localStorage.setItem("habits", JSON.stringify(habits));
    }catch (error) {
      console.error("Error al guardar habitos a localStorage:", error);
    }
  }, [habits]);

  return (
    <HabitContext.Provider value={{ habits, dispatch }}>
      {children}
    </HabitContext.Provider>
  );
};

export default HabitContext;
