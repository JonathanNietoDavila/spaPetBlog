import { Grid, Typography } from '@mui/material';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: 'primary.main',
        padding: 4,
      }}
    >
      <Grid item xs={3} sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
        <Typography variant='h5'>Login form</Typography>
      </Grid>
    </Grid>
  );
};
