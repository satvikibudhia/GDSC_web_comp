import React from 'react';
import { useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

function ScrollToTopFab() {
  const trigger = useScrollTrigger();

  const scrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 3,
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
          title="Scroll back to top"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
  );
}

function App() {
  return (
    <div>
      <ScrollToTopFab />
    </div>
  );
}

export default App;
