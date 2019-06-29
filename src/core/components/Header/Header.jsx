import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  block: {
    alignItems: 'left',
    marginTop: theme.spacing(2),
  },
  header: {
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
  subheader: {
    alignItems: 'left',
    marginTop: theme.spacing(2),
  },
}));

const Header = ({ label, variant }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.paper, {
        [classes.block]: variant === 'block',
        [classes.header]: variant === 'header',
        [classes.subheader]: variant === 'subheader',
      })}
    >
      {variant === 'header' && (
        <Typography component="h2" variant="h4">
          {label}
        </Typography>
      )}

      {variant === 'subheader' && (
        <Typography component="h3" variant="h5">
          {label}
        </Typography>
      )}
      {variant === 'block' && (
        <Typography component="h4" variant="h6">
          {label}
        </Typography>
      )}
    </div>
  );
};

Header.defaultProps = {
  variant: 'header',
};

Header.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['header', 'subheader', 'block']),
};

export default Header;
