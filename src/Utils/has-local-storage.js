export default function hasLocalStorage() {
  const testString = 'ls';
  try {
    localStorage.setItem(testString, testString);
    localStorage.removeItem(testString);
    return true;
  } catch (e) {
    return false;
  }
}
