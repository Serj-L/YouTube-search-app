export const numFormatter = new Intl.NumberFormat('ru');

export const declOfNum = (number: number, words: string[]): string => {
  const x = Math.abs(number) % 100;
  const y = x % 10;

  if (x > 10 && x < 20) return words[2];

  if (y > 1 && y < 5) return words[1];

  if (y === 1) return words[0];

  return words[2];
};

export const detectMobile = (maxWidth: number = 991): boolean => {
  const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', 'i');

  return devices.test(navigator.userAgent) || window.innerWidth <= maxWidth;
};
