import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Card, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import Grow from '@mui/material/Grow';
import { COLORS } from '../colors';
import SubMenuBox from './SubMenuBox';

const useStyles = makeStyles({
  bar: {
    width: '58%',
    height: '10%',
    backgroundColor: COLORS.GRAY.GRAY,
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '2%',
    borderRadius: 50,
    position: 'sticky',
  },
  menuText: {
    color: COLORS.WHITE.SEMIWHITE,
    fontWeight: 600,
  },
  menu: {
    textDecoration: 'none',
    maxWidth: '100%',
    paddingLeft: '2%',
  },
  focusMenuText: {
    color: COLORS.YELLOW.YELLOW,
    fontWeight: 600,
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  function setYellow(e) {
    e.target.style.color = COLORS.YELLOW.YELLOW;
  }

  function setWhite(e) {
    e.target.style.color = COLORS.WHITE.SEMIWHITE;
  }

  const openBox = (e) => {
    setYellow(e);
    setOpen(true);
  };

  const closeBox = (e) => {
    setWhite(e);
    setOpen(false);
  };
  return (
    <div>
      <div className={classes.bar} onMouseLeave={closeBox}>
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
        >
          <Link to='#' className={classes.menu}>
            <b
              className={classes.menuText}
              onMouseEnter={openBox}
              onMouseLeave={setWhite}
            >
              WHO WE ARE
            </b>
          </Link>
          <Link to='#' className={classes.menu}>
            <b
              className={classes.menuText}
              onMouseEnter={setYellow}
              onMouseLeave={setWhite}
            >
              PRODUCTS
            </b>
          </Link>
          <Link to='#' className={classes.menu}>
            <b
              className={classes.menuText}
              onMouseEnter={setYellow}
              onMouseLeave={setWhite}
            >
              FOODSERVICE/INDUSTRIAL
            </b>
          </Link>
          <Link to='#' className={classes.menu}>
            <b
              className={classes.menuText}
              onMouseEnter={setYellow}
              onMouseLeave={setWhite}
            >
              WHERE TO BUY
            </b>
          </Link>
          <Link to='#' className={classes.menu}>
            <b
              className={classes.menuText}
              onMouseEnter={setYellow}
              onMouseLeave={setWhite}
            >
              CONTACT US
            </b>
          </Link>
        </Grid>
      </div>
      {/*
        하단은 WHO WE ARE 마우스 enter시 등장하는 submenu 컴포넌트
      */}
      {open ? (
        <SubMenuBox open={open} openBox={openBox} closeBox={closeBox} />
      ) : null}
    </div>
  );
}
