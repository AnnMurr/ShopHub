import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export const Logo = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
            }}
        >
            SHOPHUB
        </Typography>
    )
}