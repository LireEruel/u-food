import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import MainTab from './MainTab';
import NextButton from '../components/NextButton';
import PrevButton from '../components/PrevButton';
const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    top: -34,
    height: 700,

    zIndex: 0,
    margin: '0%',
  },
  nextButton: {
    position: 'absolute',
    zIndex: 3,
    top: '50%',
    right: 0,
  },
});

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PrevButton>prev</PrevButton>
      <NextButton className={classes.nextButton}> next</NextButton>
      <MainTab />
    </div>
  );
}
