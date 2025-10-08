import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Form = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Paper
            elevation={3}
            sx={{
                maxWidth: 400,
                mx: "auto",
                mt: 20,
                p: 4,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: 2,
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                LOGIN
            </Typography>
            <Box component="form" >
                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    sx={{ mb: 2, backgroundColor: "#fff" }}
                />
                <TextField
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    sx={{ mb: 2 }}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <Button type="submit" variant="contained" fullWidth disableElevation>
                    Log in
                </Button>
            </Box>
        </Paper>
    )
}