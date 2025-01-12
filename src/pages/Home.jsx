import React, { useContext } from "react";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import HabitContext from "../context/HabitContext";
import HabitList from "../components/HabitList";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { habits, dispatch } = useContext(HabitContext);
  const navigate = useNavigate();

  const handleAddHabit = () => {
    navigate("/habit/new");
  };

  const handleEditHabit = (habit) => {
    navigate(`/habit/${habit.id}`);
  };

  const handleDeleteHabit = (id) => {
    dispatch({ type: "DELETE_HABIT", payload: id });
  };

  return (
    <Box p={8}>
      <Heading mb={4}>Seguimiento de Hábitos</Heading>
      <Button colorScheme="teal" onClick={handleAddHabit}>
        Agregar Hábito
      </Button>
      <Stack mt={6}>
        <HabitList
          habits={habits}
          onEdit={handleEditHabit}
          onDelete={handleDeleteHabit}
        />
      </Stack>
    </Box>
  );
};

export default Home;