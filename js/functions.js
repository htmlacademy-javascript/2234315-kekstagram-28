function checkCommentLength(comment, length) {
  if (comment.length <= length) {
    return true;
  }
  return false;
}

function checkPalindromm(palindrom) {
  palindrom = palindrom.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < palindrom.length / 2; i++) {
    if (palindrom.at(i) !== palindrom.at(-1 - i)) {
      return false;
    }
  }
  return true;
}

function getNumber(message) {
  message = String(message).replaceAll(/[^\d]/g, '');
  const number = parseInt(message, 10);
  return number;
}

function getFileName(text, length, fillSymbol){
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
