/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1.concat('', value2);
}
/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  return value.slice(7, value.length - 1);
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  return value.repeat(count);
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  return str.substring(1, str.length - 1);
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  const first = '┌'.concat('─'.repeat(width - 2)).concat('┐\n');
  const second = '│'.concat(' '.repeat(width - 2)).concat('│\n');
  const third = '└'.concat('─'.repeat(width - 2)).concat('┘\n');
  return first.concat(second.repeat(height - 2)).concat(third);
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const input = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ?!';
  const output = ' NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm ?!';
  let encoded = '';
  for (let i = 0; i < str.length; i += 1) {
    const index = input.indexOf(str[i]);
    encoded += output[index];
  }
  return encoded;
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  return (typeof value === 'string' || value instanceof String);
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  let x = 0;
  // for (let i = 0; i < value.length; i += 1) {
  //   x = i;
  // }
  if (value === 'A♣') {
    x = 0;
  }
  if (value === '2♣') {
    x = 1;
  }
  if (value === '3♣') {
    x = 2;
  }
  if (value === '4♣') {
    x = 3;
  }
  if (value === '5♣') {
    x = 4;
  }
  if (value === '6♣') {
    x = 5;
  }
  if (value === '7♣') {
    x = 6;
  }
  if (value === '8♣') {
    x = 7;
  }
  if (value === '9♣') {
    x = 8;
  }
  if (value === '10♣') {
    x = 9;
  }
  if (value === 'J♣') {
    x = 10;
  }
  if (value === 'Q♣') {
    x = 11;
  }
  if (value === 'K♣') {
    x = 12;
  }
  if (value === 'A♦') {
    x = 13;
  }
  if (value === '2♦') {
    x = 14;
  }
  if (value === '3♦') {
    x = 15;
  }
  if (value === '4♦') {
    x = 16;
  }
  if (value === '5♦') {
    x = 17;
  }
  if (value === '6♦') {
    x = 18;
  }
  if (value === '7♦') {
    x = 19;
  }
  if (value === '8♦') {
    x = 20;
  }
  if (value === '9♦') {
    x = 21;
  }
  if (value === '10♦') {
    x = 22;
  }
  if (value === 'J♦') {
    x = 23;
  }
  if (value === 'Q♦') {
    x = 24;
  }
  if (value === 'K♦') {
    x = 25;
  }
  if (value === 'A♥') {
    x = 26;
  }
  if (value === '2♥') {
    x = 27;
  }
  if (value === '3♥') {
    x = 28;
  }
  if (value === '4♥') {
    x = 29;
  }
  if (value === '5♥') {
    x = 30;
  }
  if (value === '6♥') {
    x = 31;
  }
  if (value === '7♥') {
    x = 32;
  }
  if (value === '8♥') {
    x = 33;
  }
  if (value === '9♥') {
    x = 34;
  }
  if (value === '10♥') {
    x = 35;
  }
  if (value === 'J♥') {
    x = 36;
  }
  if (value === 'Q♥') {
    x = 37;
  }
  if (value === 'K♥') {
    x = 38;
  }
  if (value === 'A♠') {
    x = 39;
  }
  if (value === '2♠') {
    x = 40;
  }
  if (value === '3♠') {
    x = 41;
  }
  if (value === '4♠') {
    x = 42;
  }
  if (value === '5♠') {
    x = 43;
  }
  if (value === '6♠') {
    x = 44;
  }
  if (value === '7♠') {
    x = 45;
  }
  if (value === '8♠') {
    x = 46;
  }
  if (value === '9♠') {
    x = 47;
  }
  if (value === '10♠') {
    x = 48;
  }
  if (value === 'J♠') {
    x = 49;
  }
  if (value === 'Q♠') {
    x = 50;
  }
  if (value === 'K♠') {
    x = 51;
  }
  return x;
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
