import { Typography, useTheme } from '@mui/material';
import React from 'react';

const Mui = () => {
  const theme = useTheme();
  return (
    <Typography component="h1">Current mode: {theme.palette.mode}</Typography>
  );
};

export default Mui;
