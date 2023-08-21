import { Container, Box } from '@mui/material';
import { UserProfileContainer } from '../containers/UserProfileContainer';
import { FC } from 'react';

export const UserProfilePage: FC = () => {
  return (
    <Container
      component="main"
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <Box component="main" flex="1" sx={{ padding: 3 }}>
        <UserProfileContainer />
        {/* Additional content can be added here */}
      </Box>
    </Container>
  );
};
