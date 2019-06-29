import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import Header from '../../core/components/Header';

const Print = ({ lines }) => (
  <Typography variant="body1">
    {lines.map((line, idx) => {
      const key = `${line}-${idx}`;
      return (
        <React.Fragment key={key}>
          {line}
          <br />
        </React.Fragment>
      );
    })}
  </Typography>
);
Print.propTypes = {
  lines: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.element]),
  ).isRequired,
};

const ShippingOptions = {
  1: 'Ground',
  2: 'Priority',
};

const cost = (s, w) => {
  const shippingRate = 0.4;
  const shipping = s === 2 ? 1.5 : 1;
  const price = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(w * shippingRate * shipping);
  return price;
};

const Complete = ({ shippingInfo: { from, shippingOption, to, weight } }) => {
  return (
    <>
      <Header label="Shipping Label" variant="subheader" />
      <Header label="From" variant="block" />
      <Print
        lines={[
          from.name,
          from.street,
          `${from.city}, ${from.state} ${from.zip}`,
        ]}
      />
      <Header label="To" variant="block" />
      <Print
        lines={[to.name, to.street, `${to.city}, ${to.state} ${to.zip}`]}
      />
      <Header label="Weight and Shipping" variant="block" />
      <Print
        lines={[
          `Weigth: ${weight}`,
          `Shipping: ${ShippingOptions[shippingOption]}`,
        ]}
      />
      <Header label="Total cost" variant="block" />
      <Print
        lines={[
          <>
            You owe&nbsp;
            <span id="price">{cost(shippingOption, weight)}</span>
          </>,
        ]}
      />
    </>
  );
};

Complete.propTypes = {
  shippingInfo: PropTypes.shape({
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

export default Complete;
