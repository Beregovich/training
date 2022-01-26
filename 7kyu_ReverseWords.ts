
export function reverseWords(str: string): string {

    return str.split(" ").map((e) => e.split('').reverse().join('')).join(' ');
  }

