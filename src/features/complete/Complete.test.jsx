import React from 'react';
import { mount } from 'enzyme';
import Complete from './Complete';

describe('<Complete />', () => {
  const props = {
    shippingInfo: {
      from: {
        city: ' ',
        name: ' ',
        state: ' ',
        street: ' ',
        zip: ' ',
      },
      shippingOption: 0,
      to: {
        city: ' ',
        name: ' ',
        state: ' ',
        street: ' ',
        zip: ' ',
      },
      weight: 0,
    },
  };

  const wrap = mount(<Complete {...props} />);

  it('should exist', () => {
    expect(wrap.exists()).toBeTruthy();
  });

  describe('when the shipping is ground', () => {
    it('calculate the cost', () => {
      wrap.setProps({
        ...props,
        shippingInfo: {
          ...props.shippingInfo,
          shippingOption: 1,
          weight: 10,
        },
      });
      const actual = wrap.find('#price').text();
      const expected = '$4.00';
      expect(actual).toEqual(expected);
    });
  });

  describe('when the shipping is priority', () => {
    it('calculate the cost', () => {
      wrap.setProps({
        ...props,
        shippingInfo: {
          ...props.shippingInfo,
          shippingOption: 2,
          weight: 5,
        },
      });
      const actual = wrap.find('#price').text();
      const expected = '$3.00';
      expect(actual).toEqual(expected);
    });
  });
});
