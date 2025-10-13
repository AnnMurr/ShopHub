import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const Spinner = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "75vh"
        }}>
            <CircularProgress sx={{ color: "#000" }} />
        </Box>
    )
}