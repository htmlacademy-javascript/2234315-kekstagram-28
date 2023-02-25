const checkCommentLength = (comment, length) => comment.length <= length;

checkCommentLength('проверяемая строка', 20);
checkCommentLength('проверяемая строка', 18);
checkCommentLength('проверяемая строка', 10);

const checkPalindromm = (string) => {
  const formattedString = string.toLowerCase().replaceAll(/\s+/g, '');

  for (let i = 0; i < formattedString.length / 2; i++) {
    if (formattedString.at(i) !== formattedString.at(-1 - i)) {
      return false;
    }
  }

  return true;
};

checkPalindromm('топот');
checkPalindromm('ДовОд');
checkPalindromm('Кекс');
checkPalindromm('Лёша на полке клопа нашёл ');

const getNumber = (message) => {
  message = String(message).replaceAll(/[^\d]/g, '');
  const number = parseInt(message, 10);

  return number;
};

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);

const getFileName = (text, length, beforeText) => {

  if (text.length >= length) {
    return text;
  }

  const fillTextSize = length - text.length;
  const extraFillTextSize = fillTextSize % beforeText.length;
  const fillTextRepeat = Math.floor(fillTextSize / beforeText.length);

  return beforeText.slice(0, extraFillTextSize) + beforeText.repeat(fillTextRepeat) + text;
};

getFileName('1', 2, '0');
getFileName('1', 4, '0');
getFileName('q', 4, 'werty');
getFileName('q', 4, 'we');
getFileName('qwerty', 4, '0');
