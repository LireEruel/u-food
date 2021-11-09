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
    fontSize: '3.5rem',
    margin: '0%',
  },
});

export default function MainLayout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <h3 className={classes.logoText}>D'Food</h3>
      </div>
      <Navbar />
    </div>
  );
}
