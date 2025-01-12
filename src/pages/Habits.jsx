import React, { useContext } from "react";
import { Box, Heading, Stack , Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import HabitContext from "../context/HabitContext";
import HabitForm from "../components/HabitForm";
import ProgressChart from "../components/ProgressChart";

const Habits = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { habits, dispatch } = useContext(HabitContext);
  const habit = habits.find((h) => h.id === id) || {};

  const handleProgressChange = (dayIndex) => {
    const updatedHabit = {
      ...habit,
      progress: habit.progress.map((value, index) =>
        index === dayIndex ? (value === 0 ? 1 : 0) : value
      ),
    };
    dispatch({ type: "UPDATE_HABIT", payload: updatedHabit });
  };

  const handleSave = (data) => {
    if (id === "new") {
      dispatch({ type: "ADD_HABIT", payload: { id: Date.now().toString(), ...data } });
    } else {
      dispatch({ type: "UPDATE_HABIT", payload: { ...habit, ...data } });
    }
    navigate("/");
  };

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <Box p={8}>
      <Button colorScheme="teal" onClick={handleGoHome} mb={4}>
        Regresar a Inicio
      </Button>
      <Heading mb={4}>{id === "new" ? "Nuevo Hábito" : "Editar Hábito"}</Heading>
      <Stack spacing={6}>
        <HabitForm onSubmit={handleSave} initialData={habit} />
        {id !== "new" && habit && (
        <ProgressChart 
        habit={habit}
        onProgressChange={handleProgressChange}
        />
        )}
      </Stack>
    </Box>
  );
};

export default Habits;