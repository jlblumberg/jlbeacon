import React from 'react';
import { Typography, Box, Link } from '@material-ui/core';

const Credit = () => {

  return(
    <Box pb={3} pt={3} id='credit'>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Built by Josh Blumberg to try to secure an interview at Beacon. View the source code on '}
        <Link color="inherit" href="https://github.com/jlblumberg/jlbeacon">
          GitHub 
        </Link>
        {'.'}
      </Typography>
    </Box>
  );

}

export default Credit;
