import { Avatar, Stack } from '@mui/material';
import ava from 'assets/ava.png';
import { useWindowSize } from 'hooks/useWindowSize';
export const AboutPage = () => {
  const { height } = useWindowSize();

  if (!height) return null;

  return (
    <Stack justifyContent={'center'} sx={{ minHeight: height - 74 }}>
      <Stack
        direction={'row'}
        gap={2}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Avatar src={ava} /> Dmitry Loschinin
      </Stack>
    </Stack>
  );
};
