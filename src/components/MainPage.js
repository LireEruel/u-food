import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import image1 from '../asset/image/main1.jpg';
import 'animate.css';
import { COLORS } from '../colors';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 700,
    backgroundImage: `url(${image1})`,
  },
  topText: {
    paddingTop: '5%',
    paddingLeft: '23%',
    letterSpacing: '4px',
  },
  mainText: {
    paddingLeft: '10%',
    fontWeight: 600,
    letterSpacing: '10px',
    fontSize: '4rem',
    margin: '0%',
  },

  bottomText: {
    marginTop: '1%',
    paddingLeft: '23%',
    letterSpacing: '4px',
    fontSize: '2.5rem',
  },
  textHighlight: {
    backgroundColor: COLORS.YELLOW.LEMON,
    width: 390,
  },
});

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.topText}>
        <div className='animate__animated animate__fadeInRight'>
          THE ESSENTIALS OF
          <div className={classes.textHighlight}>KOREAN CUISINE AND BEYOND</div>
        </div>
      </h3>
      <div className={classes.mainText}>
        <div className='animate__animated animate__fadeInLeft'>
          <h2 className={classes.mainText}>O’FOOD</h2>
        </div>
      </div>
      <div className={classes.bottomText}>
        <div className='animate__animated animate__fadeInRight'>
          <span>
            AUTHENTICITY AND TRADITION
            <br /> MEET INNOVATION
          </span>
        </div>
      </div>
    </div>
  );
}
