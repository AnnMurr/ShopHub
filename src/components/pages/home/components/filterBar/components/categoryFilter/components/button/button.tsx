import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Button from '@mui/material/Button';

interface CategoryButtonProps {
  handleToggle: () => void;
}

export const CategoryButton = ({ handleToggle }: CategoryButtonProps) => {
  return (
    <Button
      onClick={handleToggle}
      variant="outlined"
      color="inherit"
      sx={{
        borderRadius: '50px',
        textTransform: 'none',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <CategoryOutlinedIcon fontSize="small" />
      Categories
    </Button>
  );
};
