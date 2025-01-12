import { Box, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";

const ProgressChart = ({ habit }) => {
  const data = {
    labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    datasets: [
      {
        label: "Progreso",
        // data: Array.isArray(habit.progress) ? habit.progress : habit.progress.split("").map((day) => Number(day)),
        data: habit.progress.split("").map((day) => Number(day)),
      },
    ],
  };  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Progreso de ${habit.name}`,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box>
      <Text fontSize="lg" mb={4}>{habit.name}</Text>
      <Line data={data} options={options} />
    </Box>
  );
};

export default ProgressChart;
