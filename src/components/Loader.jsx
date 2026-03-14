import { Box, CircularProgress } from '@mui/material';

const Loader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
    <CircularProgress color="error" />
  </Box>
);

export default Loader;
