import React from 'react';
import renderer from 'react-test-renderer';
import Cta from './Cta.js';

it('Cta component matches snapshot', () => {
  const component = renderer.create(
    <Cta label={'Test Label'} message={'Test Message'} onClick={() => {}} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
