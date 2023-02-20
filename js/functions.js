function checkCommentLength(comment, length) {
  if (comment.length <= length) {
    return true;
  }
  return false;
}

checkCommentLength('проверяемая строка', 20);
checkCommentLength('проверяемая строка', 18);
checkCommentLength('проверяемая строка', 10);

function checkPalindromm(palindrom) {
  palindrom = palindrom.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < palindrom.length / 2; i++) {
    if (palindrom.at(i) !== palindrom.at(-1 - i)) {
      return false;
    }
  }
  return true;
}

checkPalindromm('топот');
checkPalindromm('ДовОд');
checkPalindromm('Кекс');
checkPalindromm('Лёша на полке клопа нашёл ');

function getNumber(message) {
  message = String(message).replaceAll(/[^\d]/g, '');
  const number = parseInt(message, 10);
  return number;
}

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);

function getFileName(text, length, fillSymbol) {
  if(text.length < length){
    const size = length - text.length;
    let fillText = '';
    let symbol = 0;
    for(let j = 0; j < size; j++){
      if(symbol === fillSymbol.length) {
        symbol = 0 ;
      }
      fillText += fillSymbol.at(symbol);
      symbol++;
    }
    return fillText + text;
  }
  return text;
}

getFileName('1', 2, '0');
getFileName('1', 4, '0');
getFileName('q', 4, 'werty');
getFileName('q', 4, 'we');
getFileName('qwerty', 4, '0');
