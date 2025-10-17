import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface TitleProps {
    id: number,
    title: string
}

export const Title = ({ id, title }: TitleProps) => {
    return (
        <Box flex={1}>
            <Link to={`/product/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="subtitle1" fontWeight={500}>
                    {title}
                </Typography>
            </Link>
        </Box>
    )
}