import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading.js';

it('Loading component matches snapshot', () => {
  const component = renderer.create(<Loading />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
