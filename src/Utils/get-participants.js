import hasLocalStorage from '../Utils/has-local-storage.js';

const url = '/users.json';
const storageTag = 'participants';

function tryRetrieveFromLocalStorage() {
  if (hasLocalStorage()) {
    const json = localStorage.getItem(storageTag);
    return json ? JSON.parse(json) : null;
  }
}

export function normaliseUsersJson(json) {
  const users = {};
  users.items = json.users;
  users.byId = json.users.reduce(
    (byId, user) => ({
      ...byId,
      [user.guid]: user,
    }),
    {}
  );
  return users;
}

export default function getParticipants() {
  const local = tryRetrieveFromLocalStorage();
  if (local) {
    console.log('Users retrieved from local storage');
    return Promise.resolve(local);
  }
  return fetch(url).then(response => response.json()).then(json => {
    console.log('Users retrieved from server');
    const users = normaliseUsersJson(json);
    localStorage.setItem(storageTag, JSON.stringify(users));
    return users;
  });
}
