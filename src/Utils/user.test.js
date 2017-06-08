import { getUsersName } from './user.js';

describe('getUsersName', () => {
  test('Users name should be as we expect', () => {
    const user = {
      name: {
        first: 'Test',
        last: 'Name',
      },
    };
    const username = getUsersName(user);
    expect(username).toEqual('Test Name');
  });
});
