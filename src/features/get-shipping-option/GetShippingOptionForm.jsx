import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

const shippingOptions = [
  { label: 'Ground', value: '1' },
  { label: 'Priority', value: '2' },
];

const GetShippingOptionForm = ({ onChange, shippingOption }) => {
  const handleChange = e => {
    if (!onChange) {
      return;
    }
    const value = +e.target.value;
    onChange(
      {
        target: {
          name: 'shippingOption',
          value,
        },
      },
      value > 0,
    );
  };

  return (
    <Grid container justify="center">
      <Grid item>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="Shipping Options"
            name="shippingOption"
            onChange={handleChange}
            value={`${shippingOption}`}
          >
            {shippingOptions.map(option => (
              <FormControlLabel
                key={option.value}
                control={<Radio id={`shipping-${option.label}`} />}
                disabled={!onChange}
                {...option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

GetShippingOptionForm.defaultProps = {
  onChange: null,
};

GetShippingOptionForm.propTypes = {
  onChange: PropTypes.func,
  shippingOption: PropTypes.number.isRequired,
};

export default GetShippingOptionForm;
