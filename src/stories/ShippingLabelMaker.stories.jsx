import React from 'react';
import { storiesOf } from '@storybook/react';

import AddressForm from '../core/components/AddressForm';
import Header from '../core/components/Header';

import GetWeightForm from '../features/get-weight/GetWeightForm';
import GetShippingOptionForm from '../features/get-shipping-option/GetShippingOptionForm';
import Confirm from '../features/confirm/Confirm';
import Complete from '../features/complete/Complete';

const shippingInfo = {
  from: {
    city: 'Boston',
    name: 'John Smith',
    state: 'MA',
    street: '131 Dartmouth St',
    zip: '02116',
  },
  shippingOption: 1,
  to: {
    city: 'New York',
    name: 'Linda Jackson',
    state: 'NY',
    street: '40 Fulton St',
    zip: '10038',
  },
  weight: 2,
};

const placeholder = 'Lorem ipsum dolor sit amet';

storiesOf('AddressForm', module)
  .add('Enabled with an address', () => (
    <AddressForm address={shippingInfo.from} onChange={() => {}} />
  ))
  .add('Enabled without an address', () => (
    <AddressForm address={{}} onChange={() => {}} />
  ))
  .add('Disabled with an address', () => (
    <AddressForm address={shippingInfo.from} />
  ))
  .add('Disabled without an address', () => <AddressForm address={{}} />);

storiesOf('Header', module)
  .add('Header', () => <Header label={placeholder} variant="header" />)
  .add('Subheader', () => <Header label={placeholder} variant="subheader" />)
  .add('Block', () => <Header label={placeholder} variant="block" />);

storiesOf('GetWeightForm', module)
  .add('Enabled', () => (
    <GetWeightForm onChange={() => {}} weight={shippingInfo.weight} />
  ))
  .add('Disabled', () => <GetWeightForm weight={shippingInfo.weight} />);

storiesOf('GetShippingOptionForm', module)
  .add('Enabled', () => (
    <GetShippingOptionForm
      onChange={() => {}}
      shippingOption={shippingInfo.shippingOption}
    />
  ))
  .add('Disabled', () => (
    <GetShippingOptionForm shippingOption={shippingInfo.shippingOption} />
  ));

storiesOf('Confirm', module).add('Done', () => (
  <Confirm wizardContext={shippingInfo} />
));

storiesOf('Complete', module).add('Complete', () => (
  <Complete shippingInfo={shippingInfo} />
));
