module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '1' || str[i] === '3' || str[i] === '5') {
      stack.push(str[i]);
    }
    if (str[i] === ')') {
      if (stack[stack.length - 1] !== '(') {
        return false;
      } else {
        stack.pop();
      }   
    }
    if (str[i] === ']') {
      if (stack[stack.length - 1] !== '[') {
        return false;
      } else {
        stack.pop();
      }   
    }
    if (str[i] === '}') {
      if (stack[stack.length - 1] !== '{') {
        return false;
      } else {
        stack.pop();
      }   
    }
    if (str[i] === '|') {
      if (stack[stack.length - 1] !== '|' || stack.length === 0) {
        stack.push(str[i]);
      } else {
        stack.pop();
      }
    }
    if (str[i] === '2') {
      if (stack[stack.length - 1] !== '1') {
        return false;
      } else {
        stack.pop();
      }   
    }
    if (str[i] === '4') {
      if (stack[stack.length - 1] !== '3') {
        return false;
      } else {
        stack.pop();
      }   
    }
    if (str[i] === '6') {
      if (stack[stack.length - 1] !== '5') {
        return false;
      } else {
        stack.pop();
      }   
    }
    if (str[i] === '7') {
      if (stack[stack.length - 1] !== '7' || stack.length === 0) {
        stack.push(str[i]);
      } else {
        stack.pop();
      }
    }
    if (str[i] === '8') {
      if (stack[stack.length - 1] !== '8' || stack.length === 0) {
        stack.push(str[i]);
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false
  } ;
};
