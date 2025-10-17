import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const EmptyState = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", p: "60px 0" }}>
            <Typography fontSize={25} variant="h2">No products found</Typography>
        </Box>
    )
}