import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import '../App.css';
import Navbar from '../Layouts/Navbar';

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingLeft: '20%',
  },
  logo: {
    paddingTop: '4%',
    paddingBottom: '2%',
  },
  logoText: {
    color: '#0b0645',
    fontWeight: 'bold',
  },
});

export default function MainLayout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <Typography className={classes.logoText} variant='h3'>
          D'Food
        </Typography>
      </div>
      <Navbar />
    </div>
  );
}
