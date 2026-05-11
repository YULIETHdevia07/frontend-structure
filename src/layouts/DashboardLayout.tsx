import { Box } from "@mui/material";
import Header from "../components/Header";
import SidebarMenu from "../components/SidebarMenu";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
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
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;