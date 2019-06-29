import React from 'react';
import PropTypes from 'prop-types';

import { Grid, TextField } from '@material-ui/core';

const GetWeightForm = ({ onChange, weight }) => {
  const handleChange = e => {
    const value = +e.target.value;
    if (!onChange) {
      return;
    }
    onChange(
      {
        target: {
          name: 'weight',
          value,
        },
      },
      value > 0,
    );
  };

  return (
    <Grid container justify="center">
      <Grid item>
        <TextField
          autoComplete="weight"
          disabled={!onChange}
          id="weight"
          label="Weight"
          name="weight"
          onChange={handleChange}
          required
          type="Number"
          value={weight <= 0 ? '' : weight}
        />
      </Grid>
    </Grid>
  );
};

GetWeightForm.defaultProps = {
  onChange: null,
};

GetWeightForm.propTypes = {
  onChange: PropTypes.func,
  weight: PropTypes.number.isRequired,
};

export default GetWeightForm;
