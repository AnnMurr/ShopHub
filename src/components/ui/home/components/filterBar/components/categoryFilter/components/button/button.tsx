import Button from "@mui/material/Button";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

interface CategoryButtonProps {
    handleToggle: () => void,
}

export const CategoryButton = ({ handleToggle }: CategoryButtonProps) => {
    return (
        <Button
            onClick={handleToggle}
            variant="outlined"
            color="inherit"
            sx={{
                borderRadius: "2rem",
                textTransform: "none",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 1,
            }}
        >
            <CategoryOutlinedIcon fontSize="small" />
            Categories
        </Button>
    )
}