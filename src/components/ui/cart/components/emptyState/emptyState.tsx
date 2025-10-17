import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ButtonComponent } from "../../../../reusable/button/button";

export const EmptyState = () => {
    return (
        <Box sx={{ display: "flex", textAlign: "center", p: "60px 0", flexDirection: "column", gap: 4 }}>
            <Typography fontSize={25} variant="h2">Your cart is empty</Typography>
            <Box sx={{ maxWidth: "200px", margin: "0 auto" }}>
                <ButtonComponent link="/" type="button" text="Let's go shopping!" />
            </Box>
        </Box>
    )
}