/** Словарь символов */
const SYMBOL_DICTIONARY = {
  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'yo',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',
  'й': 'y',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'h',
  'ц': 'c',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'shch',
  'Ъ': '',
  'ы': 'y',
  'ь': '',
  'э': 'e',
  'ю': 'yu',
  'я': 'ya',
  ' ': '-',
};

/**
 * Транслитерировать текст
 * @param text текст на русском языке
 * @returns транслитерированный текст из английских букв
 */
export const getTranslitText = (text: string = '') => {
  let newText = text;

  Object.entries(SYMBOL_DICTIONARY).forEach(([ru, en]) => {
    newText = text.replace(new RegExp(ru, 'g'), en);
  });

  return newText;
};
