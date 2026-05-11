import {
    Box,
    Typography,
    List,
    ListItemButton,
    ListItemText,
    Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../data/menuItems";

const SidebarMenu = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: "260px",
                minHeight: "100vh",
                backgroundColor: "background.paper",
                borderRight: "1px solid #e0e0e0",
                padding: "1rem",
            }}
        >
            <Typography
                sx={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                }}
            >
                App
            </Typography>

            {menuItems.map((module) => (
                <Box key={module.module} sx={{ marginBottom: "1rem" }}>
                    <Typography
                        sx={{
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: "text.secondary",
                            textTransform: "uppercase",
                            marginBottom: "0.5rem",
                        }}
                    >
                        {module.module}
                    </Typography>

                    {module.submodules.map((submodule) => (
                        <Box key={submodule.name} sx={{ marginBottom: "0.5rem" }}>
                            <Typography
                                sx={{
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                    marginLeft: "0.5rem",
                                    marginBottom: "0.3rem",
                                }}
                            >
                                {submodule.name}
                            </Typography>

                            <List dense>
                                {submodule.options.map((option) => (
                                    <ListItemButton
                                        key={option.path}
                                        onClick={() => navigate(option.path)}
                                        sx={{
                                            borderRadius: "8px",
                                            paddingLeft: "1.5rem",
                                        }}
                                    >
                                        <ListItemText primary={option.label} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Box>
                    ))}

                    <Divider />
                </Box>
            ))}
        </Box>
    );
};

export default SidebarMenu;