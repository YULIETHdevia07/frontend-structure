import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <AppBar position="static" elevation={0}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6">
                    App
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography variant="body2">
                        {user ? `Hola, ${user.name}` : "Usuario"}
                    </Typography>

                    <Button color="inherit" onClick={handleLogout}>
                        Cerrar sesión
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;