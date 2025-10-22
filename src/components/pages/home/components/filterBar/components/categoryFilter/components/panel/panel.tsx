import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSearchParams } from 'react-router-dom';

import { useGetAllCategoriesQuery } from '@/services/productsApi';

interface PanelProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const Panel = ({ isOpen, setIsOpen }: PanelProps) => {
  const { data } = useGetAllCategoriesQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClose = () => setIsOpen(false);

  const handleSelect = (category: string) => {
    const sortBy = searchParams.get('sortBy');
    const order = searchParams.get('order');

    sortBy && order
      ? setSearchParams({ category: category, sortBy: 'price', order: order })
      : setSearchParams({ category: category });

    handleClose();
  };

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={handleClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 260,
          boxSizing: 'border-box',
          borderRight: '1px solid #eee',
        },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <CategoryOutlinedIcon color="action" />
          <Typography variant="h6" fontWeight={600}>
            Categories
          </Typography>
        </Box>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </Toolbar>

      <Box sx={{ overflowY: 'auto', p: 1 }}>
        <List>
          {data?.map((category: string, i) => {
            return (
              <ListItemButton
                key={i}
                onClick={() => handleSelect(category)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  textTransform: 'capitalize',
                }}
              >
                <ListItemText primary={category} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
