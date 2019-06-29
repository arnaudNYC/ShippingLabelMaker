import React from 'react';
import PropTypes from 'prop-types';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import WizardStep from '../WizardStep';

const WizardAction = {
  end: 3,
  next: 2,
  prev: 1,
};

const Wizard = ({
  header: Header,
  onChange,
  onComplete,
  steps,
  wizardContext,
}) => {
  const [step, setStep] = React.useState(0);

  const [isValid, setIsValid] = React.useState(
    Array.from({ length: steps.length }, () => false),
  );

  const handleOnChange = (e, valid) => {
    onChange(e);
    setIsValid([...isValid.slice(0, step), valid, ...isValid.slice(step)]);
  };

  const onAction = action => {
    switch (action) {
      case WizardAction.prev: {
        setStep(step - 1);
        break;
      }
      case WizardAction.next: {
        setStep(step + 1);
        break;
      }
      case WizardAction.end: {
        onComplete();
        break;
      }
      default:
        break;
    }
  };

  const ActiveStep = steps[step].StepComponent;

  return (
    <>
      <Header />
      <Stepper activeStep={step}>
        {steps.map(({ stepLabel }) => (
          <Step key={stepLabel}>
            <StepLabel>{stepLabel}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <ActiveStep onChange={handleOnChange} wizardContext={wizardContext} />
      <WizardStep
        currentStep={step}
        isValid={isValid[step]}
        onAction={onAction}
        totalSteps={steps.length}
      />
    </>
  );
};

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  steps: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  wizardContext: PropTypes.object.isRequired,
};

export { WizardAction };
export default Wizard;
