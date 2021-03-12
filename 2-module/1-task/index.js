function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] !== NaN || typeof salaries[key] !== Infinity || typeof salaries[key] !== -Infinity) {
      if (typeof salaries[key] == 'number'){
        sum += salaries[key];
      }
    }
  }
  return sum;

}
