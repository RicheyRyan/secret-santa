import React from 'react';
import renderer from 'react-test-renderer';
import EmailView from './EmailView.js';
import { users, matches } from '../Stubs/Stubs.js';

it('Cta component matches snapshot', () => {
  const component = renderer.create(
    <EmailView
      sendEmails={() => {}}
      toggleEmailView={() => {}}
      users={users}
      matches={matches}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
