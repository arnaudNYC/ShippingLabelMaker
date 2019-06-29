import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../core/components/Header';
import AddressForm from '../../core/components/AddressForm';

const GetReceiverAddress = ({ onChange, wizardContext: { to } }) => (
  <>
    <Header label="Enter the receiver's address" variant="subheader" />
    <AddressForm address={to} onChange={onChange} variant="to" />
  </>
);

GetReceiverAddress.propTypes = {
  onChange: PropTypes.func.isRequired,
  wizardContext: PropTypes.shape({
    to: PropTypes.shape({
      city: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default GetReceiverAddress;
