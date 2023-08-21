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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRoutes } from './routes/AppRoutes';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <ThemeProvider theme={theme}>
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
            <ListItemButton
              component={Link}
              to="/"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/about"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About me" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/user"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItemButton>
          </List>
        </Drawer>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}
