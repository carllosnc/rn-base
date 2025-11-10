export function key(length = 10) {
  return Math.random().toString(36).substring(2, 2 + length);
}
