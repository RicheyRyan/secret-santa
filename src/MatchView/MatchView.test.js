import React from 'react';
import renderer from 'react-test-renderer';
import MatchView from './MatchView.js';
import { users, matches } from '../Stubs/Stubs.js';

it('Cta component matches snapshot', () => {
  const component = renderer.create(
    <MatchView
      users={users}
      matches={matches}
      reshuffle={() => {}}
      toggleEmailView={() => {}}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
