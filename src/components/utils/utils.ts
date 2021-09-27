export const numFormatter = new Intl.NumberFormat('ru');

export const declOfNum = (number: number, words: string[]): string => {
  const x = Math.abs(number) % 100;
  const y = x % 10;

  if (x > 10 && x < 20) return words[2];

  if (y > 1 && y < 5) return words[1];

  if (y === 1) return words[0];

  return words[2];
};
