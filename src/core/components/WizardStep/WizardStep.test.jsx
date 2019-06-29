import React from 'react';
import { shallow } from 'enzyme';
import WizardStep from './WizardStep';

describe('<WizardStep />', () => {
  const onAction = jest.fn();
  const props = {
    currentStep: 1,
    isValid: true,
    onAction,
    totalSteps: 3,
  };

  const wrap = shallow(<WizardStep {...props} />);

  it('should exist', () => {
    expect(wrap.exists()).toBeTruthy();
  });

  describe('clicking on previous', () => {
    it('should move backwards', () => {
      wrap.find('#previous').prop('onClick')();
      expect(onAction).toHaveBeenCalledWith(1);
    });
  });

  describe('clicking on next', () => {
    it('should move forwards', () => {
      wrap.find('#next').prop('onClick')();
      expect(onAction).toHaveBeenCalledWith(2);
    });
  });
});
