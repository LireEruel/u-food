import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Card, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import Grow from '@mui/material/Grow';
import { COLORS } from '../colors';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '13%',
    marginLeft: '1%',
  },
  card: {
    height: '18%',
    padding: '10%',
  },
  subMenu: {
    textDecoration: 'none',
    color: COLORS.BLUE.INDIGOBLUE,
    marginTop: 10,
  },
  subText: {
    textDecoration: 'none',
    color: COLORS.BLUE.SKY,
  },
  ul: {
    listStyle: 'none',
    paddingLeft: 15,
    margin: 5,
  },
  subMenuSet: {
    marginTop: 30,
  },
});

export default function SubMenuBox(props) {
  const classes = useStyles();
  const open = props.open;
  const openBox = props.openBox;
  const closeBox = props.closeBox;

  function setSky(e) {
    e.target.style.color = COLORS.BLUE.SKY;
  }

  function setBlack(e) {
    e.target.style.color = COLORS.BLACK.BLACK;
  }
  function setGray(e) {
    e.target.style.color = COLORS.GRAY.GRAY;
  }

  return (
    <div className={classes.root}>
      <Box>
        <Grow in={open}>
          <Card
            className={classes.card}
            onMouseEnter={openBox}
            onMouseLeave={closeBox}
          >
            <Link to='#' className={classes.subMenu}>
              <p onMouseEnter={setSky} onMouseLeave={setGray}>
                ABOUT US
              </p>
            </Link>
            <p className={classes.subMenuSet}>
              <div
                className={classes.subText}
                onMouseEnter={setBlack}
                onMouseLeave={setSky}
              >
                Sister brand
              </div>
              <ul className={classes.ul}>
                <li>
                  <Link to='#' className={classes.subMenu}>
                    <div onMouseEnter={setSky} onMouseLeave={setBlack}>
                      JONGGA USA
                    </div>
                  </Link>
                </li>
              </ul>
            </p>
            <p className={classes.subMenuSet}>
              <div
                className={classes.subText}
                onMouseEnter={setBlack}
                onMouseLeave={setSky}
              >
                Corporate Site
              </div>
              <ul className={classes.ul}>
                <li>
                  <Link to='#' className={classes.subMenu}>
                    <div onMouseEnter={setSky} onMouseLeave={setBlack}>
                      DAESANG AMERICA
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#' className={classes.subMenu}>
                    <div onMouseEnter={setSky} onMouseLeave={setBlack}>
                      DAESANG KOREA
                    </div>
                  </Link>
                </li>
              </ul>
            </p>
          </Card>
        </Grow>
      </Box>
    </div>
  );
}
