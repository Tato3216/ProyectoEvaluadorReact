import { useEffect, useState } from "react";
import { Button, Input, Select ,Stack, Flex, Checkbox } from "@chakra-ui/react";


const HabitForm = ({ onSubmit, initialData }) => {
  const [progress, setProgress] = useState(initialData?.progress || "0000000");
  const [name, setName] = useState(initialData?.name || "");
  const [goal, setGoal] = useState(initialData?.goal || 7);
  const [category, setCategory] = useState(initialData?.category || "General");
  
  const toggleDay = (index) => {
    const updatedProgress = progress
      .split("")
      .map((char, i) => (i === index ? (char === "0" ? "1" : "0") : char))
      .join("");
    setProgress(updatedProgress);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, goal, category, progress });
  };

  useEffect(() => {
    if(initialData & !name) {
      setName(initialData.name);
      setGoal(initialData.goal);
      setCategory(initialData.category);
      setProgress(initialData.progress || "0000000");
    }
  }, [initialData]);
  
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
      <Flex>
      {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day, index) => (
          <Checkbox
            key={index}
            isChecked={progress[index] === "1"}
            isDisabled={progress[index] === "1"}
            onChange={() => toggleDay(index)}
          >
            {day}
          </Checkbox>
        ))}
      </Flex>
    </form>
  );
};

export default HabitForm;
