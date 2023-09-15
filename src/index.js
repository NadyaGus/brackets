module.exports = function check(str, bracketsConfig) {
  // your solution
  // bracketsComfig.flat(), из str сделать Set с помощью цикла for и метода set.add(). Затем сравнить str и Set
  let flatBrakets = bracketsConfig.flat();
  let strBrakets = flatBrakets.toString().replace(",", "");
  let set = new Set();

  for (let i = 0; i < str.length; i++) {
    set.add(i);
  }

  if (set === flatBrakets) {
    return true;
  } else if (str === strBrakets) {
    return true;
  } else if (set === strBrakets) {
    return true;
  } else {
    return false;
  }
};
