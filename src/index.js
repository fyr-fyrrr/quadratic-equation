module.exports = function solveEquation(equation) {
  // your implementation
  const arr = equation.split(' ');
  const a = arr [0];
  const arr2 = arr.slice(3,5);
  const b = arr2.join('');
  const arr3 = arr.slice(7,9);
  const c = arr3.join('');
  const discriminant = Math.pow(b,2) - 4 * a * c;
  let solutionFirst = (-b + (Math.sqrt(discriminant))) / (2 * a);
  solutionFirst = Math.round(solutionFirst);
  let solutionSecond = (-b - (Math.sqrt(discriminant))) / (2 * a);
  solutionSecond = Math.round(solutionSecond);
  const solutions = [solutionFirst , solutionSecond]
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  solutions.sort(compareNumeric);
  return solutions;
}
