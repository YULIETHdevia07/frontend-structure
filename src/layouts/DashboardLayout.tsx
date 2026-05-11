import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SidebarMenu from "../components/SidebarMenu";

const DashboardLayout = () => {
  return (
    <Box>
      <Header />

      <Box sx={{ display: "flex" }}>
        <SidebarMenu />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: "2rem",
            backgroundColor: "background.default",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;