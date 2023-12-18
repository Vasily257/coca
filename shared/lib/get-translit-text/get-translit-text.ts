/** Словарь символов */
const ruToEn = {
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
 * @param text текст на русском или английском языке
 * @param target целевой язык транслитерации (ru, en)
 */
export const getTranslitText = (text: string = '', target: 'ru' | 'en' = 'en') => {
  let newText = text;

  Object.entries(ruToEn).forEach(([ru, en]) => {
    if (target === 'en') {
      newText = text.replace(new RegExp(ru, 'g'), en);
    } else if (target === 'ru') {
      newText = text.replace(new RegExp(en, 'g'), ru);
    }
  });

  return newText;
};
