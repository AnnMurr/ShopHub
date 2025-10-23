import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Form } from './components/form/form';

export const Login = () => {
  return (
    <>
      <Container>
        <Box sx={{ pt: '160px' }}>
          <Form />
        </Box>
      </Container>
    </>
  );
};
