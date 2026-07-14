export const normalizeWord = (value) =>
  value
    .trim()
    .toLocaleLowerCase('es-AR')
    .replaceAll('ñ', '__enie__')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replaceAll('__enie__', 'ñ');

export const displayWord = (value) => value.trim().toLocaleLowerCase('es-AR');

export const scoreFor = (word) =>
  Array.from(word.trim()).filter((char) => /[a-záéíóúüñ]/i.test(char)).length;

export const getLocalValidationError = ({ word, words, nextLetter }) => {
  const normalized = normalizeWord(word);

  if (!normalized) return 'Ingresa una palabra para continuar.';
  if (!/^[a-zñáéíóúü]+$/i.test(word.trim())) return 'Solo se permiten palabras, sin espacios ni numeros.';
  if (words.some((usedWord) => normalizeWord(usedWord) === normalized)) return 'La palabra ya fue utilizada.';
  if (nextLetter && normalized.at(0) !== nextLetter) {
    return `La palabra debe comenzar con "${nextLetter.toUpperCase()}".`;
  }

  return null;
};
