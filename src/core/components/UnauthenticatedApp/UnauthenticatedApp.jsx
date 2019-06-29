import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';

import Navbar from '../Navbar';

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UnauthenticatedApp = ({ onLogin }) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    password: '',
    user: '',
    wrongPassword: false,
    wrongUser: false,
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const DEFAULT_USER_LENGTH = 3;
  const DEFAULT_USER_ERROR = `The username can be any ${DEFAULT_USER_LENGTH} characters`;

  const DEFAULT_PASSWORD_LENGTH = 6;
  const DEFAULT_PASSWORD_ERROR = `The password can be any ${DEFAULT_PASSWORD_LENGTH} characters`;

  const submit = v => {
    v.preventDefault();
    const { value: user } = v.target.user;
    const { value: password } = v.target.password;

    const wrongUser = user.length < DEFAULT_USER_LENGTH;
    const wrongPassword = password.length < DEFAULT_PASSWORD_LENGTH;

    if (wrongPassword || wrongUser) {
      setValues({
        ...values,
        wrongPassword,
        wrongUser,
      });
      return;
    }
    onLogin(user);
  };

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h2" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} id="form" noValidate onSubmit={submit}>
            <TextField
              autoComplete="username"
              autoFocus
              error={values.wrongUser}
              fullWidth
              helperText={DEFAULT_USER_ERROR}
              id="user"
              label="User"
              margin="normal"
              name="user"
              onChange={handleChange('user')}
              required
              variant="outlined"
            />
            <TextField
              autoComplete="current-password"
              error={values.wrongPassword}
              fullWidth
              helperText={DEFAULT_PASSWORD_ERROR}
              id="password"
              label="Password"
              margin="normal"
              name="password"
              required
              type="password"
              variant="outlined"
            />
            <Button
              className={classes.submit}
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

UnauthenticatedApp.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default UnauthenticatedApp;
