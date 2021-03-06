import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  orange, purple } from '@mui/material/colors';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const innerTheme = createTheme({
  palette: {
    primary: {
      main: purple[100],
    },
    secondary: {
      main: orange[500],
    },

  },
});

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={innerTheme}>
            <Box sx={{ flexGrow: 1 }} bgcolor="primary.main">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Bevvy
          </Typography>
          <Button color= "inherit" href='/' sx={{ fontWeight: 'bold' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </ThemeProvider>
  );
}
