import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

import Navbar from '../Navbar';

import ShippingLabelMaker from '../../../features/shipping-label-maker/ShippingLabelMaker';

const AuthenticatedApp = ({ logout, user }) => (
  <>
    <Navbar logout={logout} user={user} />
    <Container component="main" maxWidth="md">
      <ShippingLabelMaker />
    </Container>
  </>
);

AuthenticatedApp.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default AuthenticatedApp;
