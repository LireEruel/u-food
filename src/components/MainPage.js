import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
});

export default function MainPage() {
  const classes = useStyles();

  return <div className={classes.root}>야야아아호</div>;
}
