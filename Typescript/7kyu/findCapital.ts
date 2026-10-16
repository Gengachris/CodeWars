export function capitals (word: string): number[] {
  return word.split('')
    .map((char, i) => char === char.toUpperCase() ? i : null)
    .filter((i): i is number => i !== null);
}

