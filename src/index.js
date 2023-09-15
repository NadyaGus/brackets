module.exports = function check(str, bracketsConfig) {
  // your solution
  // bracketsComfig.flat(), из str сделать Set с помощью цикла for и метода set.add(). Затем сравнить str и Set
  let flatBrakets = bracketsConfig.flat();
  let set = new Set();
  
  for (let i = 0; i < str.length; i++) {
    set.add(i);
  }

  if (set === flatBrakets) {
    return true;
  } else {
    return false;
  }
}
