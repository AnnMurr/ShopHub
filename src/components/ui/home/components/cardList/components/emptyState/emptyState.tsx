import { Box, Typography } from "@mui/material";

export const EmptyState = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", p: "60px 0" }}>
            <Typography fontSize={25} variant="h2">No products found</Typography>
        </Box>
    )
}