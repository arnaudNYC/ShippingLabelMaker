import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../core/components/Header';
import GetShippingOptionForm from './GetShippingOptionForm';

const GetShippingOption = ({ onChange, wizardContext: { shippingOption } }) => {
  return (
    <>
      <Header label="Choose a shipping option" variant="subheader" />
      <GetShippingOptionForm
        onChange={onChange}
        shippingOption={shippingOption}
      />
    </>
  );
};

GetShippingOption.propTypes = {
  onChange: PropTypes.func.isRequired,
  wizardContext: PropTypes.shape({
    shippingOption: PropTypes.number.isRequired,
  }).isRequired,
};

export default GetShippingOption;
