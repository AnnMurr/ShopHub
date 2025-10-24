import Box from '@mui/material/Box';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Box sx={{ maxWidth: '1400px', m: '0 auto', p: '0 15px' }}>{children}</Box>
  );
};
