import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const AppliedFiltersBox = () => {
    const [filters, setFilters] = useState<Array<string>>([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const order = searchParams.get("order");
        const category = searchParams.get("category");
        const currentOrder = order === "asc" ? "Cheapest first" : order === "desc" ? "Most expensive first" : null;

        const activeFilters = [category, currentOrder].filter((cat) => cat) as Array<string>;

        setFilters(activeFilters);
    }, [searchParams]);

    if (!filters.length) return null;

    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            alignItems="center"
            gap={1}
            sx={{ mt: 1 }}
        >
            {filters.map((filter, i) => (
                <Chip
                    key={i}
                    label={filter}
                    color="default"
                    variant="outlined"
                    size="small"
                    sx={{
                        textTransform: "capitalize",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                    }}
                />
            ))}
        </Stack>
    )
}