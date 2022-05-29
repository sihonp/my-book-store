import React, { useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themes } from './themes'
import { CssBaseline } from '@mui/material';
import Router from './router';
import BottomBar from './components/BottomBar';

const App = () => {
  const [currentId, setCurrentId] = useState(0)
  const [mode, setMode] = useState('light');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ColorModeContext = React.createContext();

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themes(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Router
          mode={mode}
          setMode={setMode}
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          setCurrentId={setCurrentId}
          currentId={currentId}
        />
        <BottomBar />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}


export default App