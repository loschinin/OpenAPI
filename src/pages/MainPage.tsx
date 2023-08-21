import { Stack } from '@mui/material';
import bg from 'assets/bg.jpg';

export const MainPage = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '87vh',
      }}
    />
  );
};
