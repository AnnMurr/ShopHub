import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { passwordRegex, emailRegex } from "../../../../../consts/consts";

interface ErrorsType {
    email: string,
    password: string
}

export const Form = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<ErrorsType>({ email: "", password: "" });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const validateForm = () => {
        let valid: boolean = true
        const newErrors: ErrorsType = { email: "", password: "" };

        if(!emailRegex.test(email)) {
            newErrors.email = "invalid email";
            valid = false
        }

        if(!passwordRegex.test(password)) {
            newErrors.password = "The password must be at least 8 characters long, with at least 1 lowercase letter, 1 uppercase letter, and 1 symbol";
            valid = false
        }

        setErrors(newErrors);
        return valid;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

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
            <Box component="form" onSubmit={handleSubmit} >
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    label="Email"
                    type="text"
                    fullWidth
                    sx={{ mb: 2, backgroundColor: "#fff" }}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    sx={{ mb: 2 }}
                    error={!!errors.password}
                    helperText={errors.password}
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