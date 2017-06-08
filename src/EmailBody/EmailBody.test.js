import React from 'react';
import renderer from 'react-test-renderer';
import EmailBody from './EmailBody.js';

const currentUser = {
  name: {
    first: 'Test',
    last: 'Name',
  },
};
const matchedUser = {
  name: {
    first: 'Test',
    last: 'Name',
  },
};

it('Cta component matches snapshot', () => {
  const component = renderer.create(
    <EmailBody user={currentUser} matchedUser={matchedUser} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
