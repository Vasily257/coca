/**
 * Вернуть траслетированный текст (на английском)
 * @param  word текст на русском
 */
const translit = (word: string = '') => {
  let newWord = word;

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

  Object.entries(ruToEn).forEach(([ru, en]) => {
    newWord = word.replace(new RegExp(ru, 'g'), en);
  });

  return newWord;
};

export default translit;
