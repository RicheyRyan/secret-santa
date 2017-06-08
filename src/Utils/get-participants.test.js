import { normaliseUsersJson } from './get-participants.js';

const original = {
  users: [
    {
      guid: '7302a5c9-f12e-45e7-a376-a9f05e4b88fc',
      name: {
        first: 'Jennifer',
        last: 'Madden',
      },
      email: 'jmadser@somemail.com',
      phone: '+353823452345',
    },
  ],
};

const expected = {
  byId: {
    '7302a5c9-f12e-45e7-a376-a9f05e4b88fc': {
      guid: '7302a5c9-f12e-45e7-a376-a9f05e4b88fc',
      name: {
        first: 'Jennifer',
        last: 'Madden',
      },
      email: 'jmadser@somemail.com',
      phone: '+353823452345',
    },
  },
  items: [
    {
      guid: '7302a5c9-f12e-45e7-a376-a9f05e4b88fc',
      name: {
        first: 'Jennifer',
        last: 'Madden',
      },
      email: 'jmadser@somemail.com',
      phone: '+353823452345',
    },
  ],
};

describe('normaliseUsersJson', () => {
  test('Users object should be in the shape we expect', () => {
    const normalised = normaliseUsersJson(original);
    expect(normalised).toEqual(expected);
  });
});
