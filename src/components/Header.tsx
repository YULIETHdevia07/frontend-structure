import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    sx={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        flexGrow: 1,
                    }}
                >
                    App
                </Typography>

            </Toolbar>
        </AppBar>
    );
};

export default Header;