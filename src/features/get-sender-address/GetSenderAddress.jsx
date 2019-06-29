import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../core/components/Header';
import AddressForm from '../../core/components/AddressForm';

const GetSenderAddress = ({ onChange, wizardContext: { from } }) => (
  <>
    <Header label="Enter the sender's address" variant="subheader" />
    <AddressForm address={from} onChange={onChange} variant="from" />
  </>
);

GetSenderAddress.propTypes = {
  onChange: PropTypes.func.isRequired,
  wizardContext: PropTypes.shape({
    from: PropTypes.shape({
      city: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default GetSenderAddress;
