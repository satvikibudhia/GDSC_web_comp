import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './images/logo.png'; // Import your logo here

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Team', path: '/team' },
  { name: 'Events', path: '/events' }
];

function ResponsiveAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handlePageNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', color: 'grey' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo section */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="Logo" style={{ height: '2rem' }} />
          </Typography>

          {/* Buttons for large screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* Mapping pages to buttons */}
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handlePageNavigation(page.path)}
                sx={{ mx: 1, color: 'grey' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Slider for small screens */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              edge="end"
              onClick={handleToggleDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={handleToggleDrawer}
            >
              <List>
                {pages.map((page) => (
                  <ListItem
                    button
                    key={page.name}
                    onClick={() => handlePageNavigation(page.path)}
                  >
                    <ListItemText primary={page.name} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
