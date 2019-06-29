import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, makeStyles } from '@material-ui/core';

import { WizardAction } from '../Wizard';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
  buttons: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: '100%',
  },
}));

const WizardStep = ({ currentStep, isValid, onAction, totalSteps }) => {
  const classes = useStyles();

  return (
    <Grid
      alignItems="center"
      className={classes.buttons}
      container
      direction="row"
      justify="center"
    >
      <Button
        className={classes.button}
        disabled={currentStep === 0}
        id="previous"
        onClick={() => onAction(WizardAction.prev)}
      >
        Back
      </Button>
      {currentStep < totalSteps - 1 && (
        <Button
          className={classes.button}
          color="primary"
          disabled={!isValid}
          id="next"
          onClick={() => onAction(WizardAction.next)}
          variant="contained"
        >
          Next
        </Button>
      )}
      {currentStep === totalSteps - 1 && (
        <Button
          className={classes.button}
          color="primary"
          id="confirm"
          onClick={() => onAction(WizardAction.end)}
          variant="contained"
        >
          Confirm
        </Button>
      )}
    </Grid>
  );
};

WizardStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  isValid: PropTypes.bool.isRequired,
  onAction: PropTypes.func.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

export default WizardStep;
