module.exports = function check(str, bracketsConfig) {
  // your solution
  // bracketsComfig.flat(), из str сделать Set с помощью цикла for и метода set.add(). Затем сравнить str и Set
  let flatBrakets = bracketsConfig.flat();
  let strBrakets = flatBrakets.toString().replace(",", "");
  let setStr = new Set();
  let setBrackets = new Set();
  let strObj = "";
  let bracketsObj = "";

  for (let i = 0; i < str.length; i++) {
    setStr.add(str[i]); // возвращает объект {'(',')'} с уникальными значениями
  }
  for (let value of setStr) {
    // делает из объекта строчку с уникальными значениями
    strObj = strObj + value;
  }

  for (let i = 0; i < strBrakets.length; i++) {
    setBrackets.add(strBrakets[i]);
  }
  for (let value of setBrackets) {
    bracketsObj = bracketsObj + value;
  }

  if (str === strObj) {
    return true;
  } else if (strObj === bracketsObj) {
    return true;
  } else {
    return false;
  }
};
