import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../core/components/Header';
import AddressForm from '../../core/components/AddressForm';
import GetWeightForm from '../get-weight/GetWeightForm';
import GetShippingOptionForm from '../get-shipping-option/GetShippingOptionForm';

const Confirm = ({ wizardContext: { from, shippingOption, to, weight } }) => {
  return (
    <>
      <Header label="Confirm" variant="subheader" />
      <Header label="Sender's address" variant="block" />
      <AddressForm address={from} variant="from" />
      <Header label="Receiver's address" variant="block" />
      <AddressForm address={to} variant="to" />
      <Header label="Weight" variant="block" />
      <GetWeightForm weight={weight} />
      <Header label="Shipping" variant="block" />
      <GetShippingOptionForm shippingOption={shippingOption} />
    </>
  );
};

Confirm.propTypes = {
  wizardContext: PropTypes.shape({
    from: PropTypes.shape({
      city: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    }),
    shippingOption: PropTypes.number.isRequired,
    to: PropTypes.shape({
      city: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    }),
    weight: PropTypes.number.isRequired,
  }).isRequired,
};

export default Confirm;
