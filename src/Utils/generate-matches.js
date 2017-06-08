export function shuffle(arr) {
  const shuffled = arr.slice(0);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

export function createPairs(arr) {
  const len = arr.length;
  return arr.reduce((matches, id, i) => {
    const nextIndex = i + 1;
    const matchedEl = nextIndex < len ? arr[nextIndex] : arr[0];
    return {
      ...matches,
      [id]: matchedEl,
    };
  }, {});
}

export default function generateMatches(users) {
  // Shuffle for random result each time
  const ids = shuffle(Object.keys(users.byId));
  return createPairs(ids);
}
