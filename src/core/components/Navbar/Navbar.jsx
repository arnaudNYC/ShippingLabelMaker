import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

const Navbar = ({ logout, user }) => {
  const classes = useStyles();
  const welcome = `Welcome ${user}`;

  return (
    <header>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} component="h1" variant="h6">
              {welcome}
            </Typography>
            {logout && (
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
};

Navbar.defaultProps = {
  logout: () => {},
  user: '',
};

Navbar.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.string,
};

export default Navbar;
