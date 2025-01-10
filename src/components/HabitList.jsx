import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import HabitCalendar from "./HabitCalendar";
import { useState } from "react";

const HabitList = ({ habits, onEdit, onDelete }) => {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredHabits = habits
    .filter((habit) => habit.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "goal") return b.goal - a.goal;
      return 0;
    });

  return (
    <Flex direction="column" gap={4}>
      <Flex gap={4} mb={4}>
        <Input
          placeholder="Buscar por nombre"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Select
          placeholder="Ordenar por"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Nombre</option>
          <option value="goal">Meta semanal</option>
        </Select>
      </Flex>
      {filteredHabits.map((habit) => (
        <Box key={habit.id} p={4} shadow="md" borderWidth="1px">
          <Text fontSize="xl">{habit.name}</Text>
          <Text>Categoría: {habit.category}</Text>
          <Text>Meta semanal: {habit.goal} días</Text>
          <HabitCalendar progress={habit.progress || [true, false, true, false, true, true, false]} />
          <Flex mt={2} gap={2}>
            <Button colorScheme="blue" onClick={() => onEdit(habit)}>Editar</Button>
            <Button colorScheme="red" onClick={() => onDelete(habit.id)}>Eliminar</Button>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default HabitList;