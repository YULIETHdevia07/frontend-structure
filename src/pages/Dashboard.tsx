import { Typography } from "@mui/material";
import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Typography
        sx={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "1rem",
        }}
      >
        Panel principal
      </Typography>

      <Typography>
        Bienvenido. Aquí se mostrará el contenido principal del sistema.
      </Typography>
    </DashboardLayout>
  );
};

export default Dashboard;