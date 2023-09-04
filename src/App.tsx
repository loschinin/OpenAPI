import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { AppRoutes } from './routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MuiThemeProvider } from './MuiThemeProvider';

const routes = [
  { name: 'Home', link: '/', icon: <HomeIcon /> },
  { name: 'News', link: 'news', icon: <NewspaperIcon /> },
  { name: 'About', link: '/about', icon: <InfoIcon /> },
];

const queryClient = new QueryClient();
export function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <MuiThemeProvider>
      <CssBaseline />

      <Router>
        <AppBar position="sticky">
          <Toolbar sx={{ gap: 2 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(!drawerOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">My Projects</Typography>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List disablePadding>
            {routes.map(({ link, icon, name }) => (
              <ListItemButton
                key={name}
                component={Link}
                to={link}
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>

        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </Router>
    </MuiThemeProvider>
  );
}
