import Box from "@mui/material/Box";
import { PriceFilter } from "./components/priceFilter/priceFilter";
import { CategoryFilter } from "./components/categoryFilter/categoryFilter";
import { ResetFilter } from "./components/resetFilter/resetFilter";
import { AppliedFiltersBox } from "./components/appliedFiltersBox/appliedFiltersBox";

export const FilterBar = () => {
    return (
        <>
            <Box sx={{ paddingTop: "60px", display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", gap: "15px" }}>
                    <CategoryFilter />
                    <PriceFilter />
                </Box>
                <ResetFilter />
            </Box>
            <AppliedFiltersBox />
        </>
    )
}