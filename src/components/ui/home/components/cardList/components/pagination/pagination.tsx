import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationBarProps {
    handlePageChange: (e: React.ChangeEvent<unknown>, page: number) => void,
    count: number,
    currentPage: number,
}

export const PaginationBar = ({ handlePageChange, count, currentPage }: PaginationBarProps) => {
    return (
        <Box display={"flex"} justifyContent={"center"} padding={"60px 0"}>
            <Stack spacing={2}>
                <Pagination
                    onChange={handlePageChange}
                    count={count}
                    shape="rounded"
                    page={currentPage}
                />
            </Stack>
        </Box>
    )
}