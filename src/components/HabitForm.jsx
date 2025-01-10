import { useState } from "react";
import { Button, Input, Select ,Stack } from "@chakra-ui/react";

const HabitForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [goal, setGoal] = useState(initialData?.goal || 7);
  const [category, setCategory] = useState(initialData?.category || "General");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, goal, category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Input
          placeholder="Nombre del hábito"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Meta semanal (Número de días)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <Select
          placeholder="Selecciona una categoría"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Salud">Salud</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Hogar">Hogar</option>
        </Select>
        <Button type="submit" colorScheme="teal">Guardar</Button>
      </Stack>
    </form>
  );
};

export default HabitForm;
