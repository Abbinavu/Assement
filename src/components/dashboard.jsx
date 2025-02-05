import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import Counter from "./counter";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Dashboard = () => {
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Activity",
        data: [10, 20, 30, 40, 50, 60],
        borderColor: "#3f51b5",
        backgroundColor: "rgba(63, 81, 181, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6">User Profile</Typography>
        <Typography>Name: {userData.name}</Typography>
        <Typography>Email: {userData.email}</Typography>
        <Typography>Phone: {userData.phone}</Typography>
      </Paper>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6">Counter</Typography>
        <Counter />
      </Paper>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h6">User Activity Trends</Typography>
        <Line data={chartData} />
      </Paper>
    </Box>
  );
};

export default Dashboard;
