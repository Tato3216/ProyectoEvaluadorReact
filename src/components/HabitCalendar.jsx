import { Box, Flex, Text } from "@chakra-ui/react";

const HabitCalendar = ({ progress }) => {
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  return (
    <Flex direction="column" align="center" p={4} border="1px solid #ccc" borderRadius="md">
      <Text fontSize="lg" mb={2}>Progreso Semanal</Text>
      <Flex gap={2}>
        {days.map((day, index) => (
          <Box
          key={index}
          bg={progress[index] === "1" ? "teal.500" : "gray.200"}
          color={progress[index] === "1" ? "white" : "black"}
        >
          {day}
        </Box>        
        ))}
      </Flex>
    </Flex>
  );
};

export default HabitCalendar;
