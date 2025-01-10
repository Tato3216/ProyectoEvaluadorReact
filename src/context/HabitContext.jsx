import { createContext, useReducer } from "react";

const HabitContext = createContext();

const initialHabits = [
  { id: 1, name: "Ejercicio", goal: 5, category: "Salud", progress: [true, true, false, true, false, true, false] },
  { id: 2, name: "Leer", goal: 7, category: "Trabajo", progress: [true, true, true, true, true, true, true] },
  { id: "3", name: "Leer libro", goal: 6, progress: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    id: "4",
    name: "Meditar",
    goal: 7,
    progress: [1, 2, 3, 4, 5, 6, 7],
  }
];


const habitReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HABIT":
      return [...state, action.payload];
    case "UPDATE_HABIT":
      return state.map((habit) =>
        habit.id === action.payload.id ? action.payload : habit
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

  return (
    <HabitContext.Provider value={{ habits, dispatch }}>
      {children}
    </HabitContext.Provider>
  );
};

export default HabitContext;
