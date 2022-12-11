//Test Case Logic
//Functions for the Unit Tests

const lettersToNumbers = (carName) => {
  return carName
    .toLowerCase()
    .replace(/[a-z]/g, "")
    .replace(/./g, ([c]) => " " + (c.charCodeAt(0) - "a".charCodeAt(0) + 1))
    .substr(1);
};

const carNameSum = (carName) => {
  const a = lettersToNumbers(carName).split(" ");
  const b = a.map(function (str) {
    return parseInt(str);
  });
  const sum = b.reduce(function (prev, curr) {
    return prev + curr;
  });
  return sum;
};

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_=\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

const suggestedValueCalc = (model, year) => {
  if (
    typeof model != "string" ||
    containsSpecialChars(model) ||
    typeof year != "number" ||
    year < 0
  ) {
    return "invalid inputs";
  } else {
    return "valid inputs";
  }

  const car_value = carNameSum(model) * 100 + year;
  return car_value;
};

module.exports = suggestedValueCalc;
