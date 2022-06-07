import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange, purple } from '@mui/material/colors';

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
  },
});



export default function ButtonAppBar() {
  
  return (
    <ThemeProvider theme={innerTheme}>
            <Box sx={{ flexGrow: 1 }} bgcolor="primary.main">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bevvy
          </Typography>
          <Button color= "primary" href='/Login'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </ThemeProvider>
  );
}
