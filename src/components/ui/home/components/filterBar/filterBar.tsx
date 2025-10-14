import { Box } from "@mui/material";
import { PriceFilter } from "./components/priceFilter/priceFilter";
import { CategoryFilter } from "./components/categoryFilter/categoryFilter";

export const FilterBar = () => {
    return (
        <Box sx={{ paddingTop: "60px", display: "flex", justifyContent: "space-between" }}>
            <CategoryFilter />
            <PriceFilter />
        </Box>
    )
}