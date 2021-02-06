// complete the function
function palindrom(str) {
  // code goes here
  if (str == str.split('').reverse().join('')) {
    return (`${str} is a palindrome`);
  }
  else{
    return (`${str} is not a palindrome`);

  }
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
