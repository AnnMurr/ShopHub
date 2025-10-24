import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Container } from '@/components/shared/container/container';

export const ErrorPage = () => {
  return (
    <Container>
      <Box
        textAlign="center"
        pt="160px"
        display="flex"
        flexDirection="column"
        gap="15px"
      >
        <Typography variant="h2">404</Typography>
        <Typography fontSize="30px" variant="h3">
          Page Not Found
        </Typography>
        <Typography component="p">
          We can’t find the page you're looking for. If you typed the URL into
          your browser, check that you entered it correctly.
        </Typography>
      </Box>
    </Container>
  );
};
