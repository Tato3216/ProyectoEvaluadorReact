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
            w="40px"
            h="40px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={progress[index] ? "teal.500" : "gray.200"}
            color={progress[index] ? "white" : "black"}
            borderRadius="md"
            fontWeight="bold"
          >
            {day}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default HabitCalendar;
