import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '60%',
    height: '10%',
    backgroundColor: '#4d4d4d',
    
    paddingBottom: '1.2%',
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
});

export default function Navbar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    function setYellow(e) {
        e.target.style.color = '#f2e85a';
     }

     function setWhite(e) {
         e.target.style.color = '#ebeef5';
    }

    function openBox = (){

    }

    return (
        <div className={classes.root}>
            <Grid
                container
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
            >
                <Link to='#' className={classes.menu}>
                    <b
                        className={classes.menuText}
                        onMouseEnter={setYellow, openBox}
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
    );
}
