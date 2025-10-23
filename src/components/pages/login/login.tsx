import Box from '@mui/material/Box';

import { Form } from './components/form/form';

import { BackButton } from '@/components/shared/backButton/backButton';
import { Container } from '@/components/shared/container/container';

export const Login = () => {
  return (
    <>
      <Container>
        <Box sx={{ pt: '100px' }}>
          <BackButton />
          <Form />
        </Box>
      </Container>
    </>
  );
};
