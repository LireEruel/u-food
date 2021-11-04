import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Card, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import Grow from '@mui/material/Grow';
const useStyles = makeStyles({
  bar: {
    width: '58%',
    height: '10%',
    backgroundColor: '#4d4d4d',
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '2%',
    borderRadius: 50,
    position: 'sticky',
  },
  menuText: {
    color: '#ebeef5',
    fontWeight: 600,
  },
  menu: {
    textDecoration: 'none',
    maxWidth: '100%',
    paddingLeft: '2%',
  },
  focusMenuText: {
    color: 'yellow',
    fontWeight: 600,
  },
  card: {
    marginLeft: '1%',
    width: '10%',
    height: '20%',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '3%',
  },
  subMenu: {
    textDecoration: 'none',
    color: '#211f2e',
  },
  subText: {
    textDecoration: 'none',
    color: '#4b9bc9',
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  function setYellow(e) {
    e.target.style.color = '#f2e85a';
  }

  function setWhite(e) {
    e.target.style.color = '#ebeef5';
  }
  function setSky(e) {
    e.target.style.color = '#4b9bc9';
  }

  function setBlack(e) {
    e.target.style.color = '#121117';
  }
  function setGray(e) {
    e.target.style.color = '#211f2e';
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
      <div>
        <Box>
          <Grow in={open}>
            <Card className={classes.card}>
              <Link to='#' className={classes.subMenu}>
                <p onMouseEnter={setBlack} onMouseLeave={setGray}>
                  ABOUT US
                </p>
              </Link>
              <p
                className={classes.subText}
                onMouseEnter={setBlack}
                onMouseLeave={setGray}
              >
                Sister brand
              </p>
              <Link to='#' className={classes.subMenu}>
                <p onMouseEnter={setSky} onMouseLeave={setBlack}>
                  JONGGA USA
                </p>
              </Link>
              <p
                className={classes.subText}
                onMouseEnter={setBlack}
                onMouseLeave={setGray}
              >
                Corporate Site
              </p>
              <Link to='#' className={classes.subMenu}>
                <p onMouseEnter={setSky} onMouseLeave={setBlack}>
                  DAESANG AMERICA
                </p>
              </Link>
              <Link to='#' className={classes.subMenu}>
                <p onMouseEnter={setSky} onMouseLeave={setBlack}>
                  DAESANG KOREA
                </p>
              </Link>
            </Card>
          </Grow>
        </Box>
      </div>
    </div>
  );
}
