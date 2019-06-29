import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../core/components/Header';

import GetWeightForm from './GetWeightForm';

const GetWeight = ({ onChange, wizardContext: { weight } }) => {
  return (
    <>
      <Header label="Enter the weight of the package" variant="subheader" />
      <GetWeightForm onChange={onChange} weight={weight} />
    </>
  );
};

GetWeight.propTypes = {
  onChange: PropTypes.func.isRequired,
  wizardContext: PropTypes.shape({
    weight: PropTypes.number.isRequired,
  }).isRequired,
};

export default GetWeight;
