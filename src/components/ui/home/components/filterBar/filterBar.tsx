import { Box } from "@mui/material";
import { PriceFilter } from "./components/priceFilter/priceFilter";

export const FilterBar = () => {
    return (
        <Box sx={{ paddingTop: "60px" }}>
            <PriceFilter />
        </Box>
    )
}