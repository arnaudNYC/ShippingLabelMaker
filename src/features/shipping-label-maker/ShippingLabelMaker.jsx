import React from 'react';
import fp from 'lodash/fp';

import Wizard from '../../core/components/Wizard';
import Header from '../../core/components/Header';

import GetSenderAddress from '../get-sender-address/GetSenderAddress';
import GetReceiverAddress from '../get-receiver-address/GetReceiverAddress';
import GetWeight from '../get-weight/GetWeight';
import GetShippingOption from '../get-shipping-option/GetShippingOption';
import Confirm from '../confirm/Confirm';
import Complete from '../complete/Complete';

const steps = [
  {
    StepComponent: GetSenderAddress,
    stepLabel: "Enter the sender's address",
  },
  {
    StepComponent: GetReceiverAddress,
    stepLabel: "Enter the receiver's address",
  },
  {
    StepComponent: GetWeight,
    stepLabel: 'Enter the weight',
  },
  {
    StepComponent: GetShippingOption,
    stepLabel: 'Choose a shipping option',
  },
  {
    StepComponent: Confirm,
    stepLabel: 'Please confirm that everything looks right',
  },
];

const ShippingLabelMaker = () => {
  const [shippingInfo, setShippingInfo] = React.useState({
    from: {
      city: '',
      name: '',
      state: '',
      street: '',
      zip: '',
    },
    shippingOption: 0,
    to: {
      city: '',
      name: '',
      state: '',
      street: '',
      zip: '',
    },
    weight: 0,
  });

  const [complete, setComplete] = React.useState(false);

  const onComplete = () => {
    setComplete(true);
  };

  const onChange = e => {
    const { name, value } = e.target;
    setShippingInfo(fp.set(name, value)(shippingInfo));
  };

  return (
    <>
      {complete ? (
        <>
          <Header label="Complete" />
          <Complete shippingInfo={shippingInfo} />
        </>
      ) : (
        <Wizard
          header={() => <Header label="Shipping Label Maker" />}
          onChange={onChange}
          onComplete={onComplete}
          steps={steps}
          wizardContext={shippingInfo}
        />
      )}
    </>
  );
};

export default ShippingLabelMaker;
