import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@material-ui/core';

const AddressForm = ({ onChange, address, variant }) => {
  const { city, name, state, street, zip } = address;

  const isFormValid = e => {
    // all required fields must be filled
    const fieldName = e.target.name.split(`${variant}.`)[1];
    const nextFieldValue = e.target.value;
    const valuesToEvaluate = {
      ...address,
      [fieldName]: nextFieldValue,
    };
    return Object.values(valuesToEvaluate).findIndex(v => v === '') === -1;
  };

  const handleChange = e => {
    const valid = isFormValid(e);
    if (onChange) {
      onChange(e, valid);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          autoComplete="name"
          disabled={!onChange}
          fullWidth
          id="name"
          label="Name"
          name={`${variant}.name`}
          onChange={handleChange}
          required
          value={name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          autoComplete="street"
          disabled={!onChange}
          fullWidth
          id="street"
          label="Street"
          name={`${variant}.street`}
          onChange={handleChange}
          required
          value={street}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          autoComplete="city"
          disabled={!onChange}
          fullWidth
          id="city"
          label="City"
          name={`${variant}.city`}
          onChange={handleChange}
          required
          value={city}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          autoComplete="state"
          disabled={!onChange}
          fullWidth
          id="state"
          label="State"
          name={`${variant}.state`}
          onChange={handleChange}
          required
          value={state}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          autoComplete="zip"
          disabled={!onChange}
          fullWidth
          id="zip"
          label="Zip"
          name={`${variant}.zip`}
          onChange={handleChange}
          required
          value={zip}
        />
      </Grid>
    </Grid>
  );
};

AddressForm.defaultProps = {
  onChange: null,
};

AddressForm.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func,
  variant: PropTypes.string.isRequired,
};

export default AddressForm;
