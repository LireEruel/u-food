import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import image1 from '../asset/image/main1.jpg';
import 'animate.css';
import { COLORS } from '../colors';
import Button from '../components/StyledButton';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    top: -34,
    height: 700,

    zIndex: 0,
    margin: '0%',
  },
  component: {
    backgroundImage: `url(${image1})`,
    height: '100%',
  },
  topText: {
    marginTop: '0%',
    paddingTop: '4%',
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
  button: {
    marginLeft: '23%',
    marginTop: '3%',
  },
  textHighlight: {
    backgroundColor: COLORS.YELLOW.LEMON,
    width: 390,
    zIndex: 3,
  },
});

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.component}>
        <h3 className={classes.topText}>
          <div className='animate__animated animate__fadeInRight'>
            THE ESSENTIALS OF
            <div className={classes.textHighlight}>
              KOREAN CUISINE AND BEYOND
            </div>
          </div>
        </h3>
        <div className={classes.mainText}>
          <div className='animate__animated animate__fadeInLeft'>
            <h2 className={classes.mainText}>D’FOOD</h2>
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
        <div className={classes.button}>
          <div className='animate__animated animate__fadeInUp'>
            <Button>LEARN MORE</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
