/*Describe all the test cases - testfunctionality spec */
const suggestedValueCalc = require("./valueCalc");

//Expected Output for the testd
//Describe is used to describe a test case
describe("suggestedValueCalc", () => {
  it("car value should be expected value", () => {
    const model = "Civic";
    const year = 2014;
    const result = suggestedValueCalc(model, year);
    expect(result);
  });

  //User Case Tests / These are like if else statements

  //Test Case 1
  it("negative number should return invalid input error", () => {
    const model = "Task-Force"; //criteria
    const year = -987; //criteria
    const result2 = suggestedValueCalc(model, year); //criteria
    expect(result2).toBe("invalid inputs"); //criteria
  });

  //Test Case 2
  it("number instead of string should return invalid input error", () => {
    const model = 23; //criteria
    const year = 2011; //criteria
    const result3 = suggestedValueCalc(model, year);
    expect(result3).toBe("invalid inputs");
  });

  //Test Case 3
  it("car value should be expected value", () => {
    const model = "Accord";
    const year = 2018;
    const result4 = suggestedValueCalc(model, year);
    expect(result4);
  });
});
