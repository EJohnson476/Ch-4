// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("Checking Organization", () =>
  {
    expect(launchcode.organization).toEqual("nonprofit");
  });

  test("Checking Director", () =>
  {
    expect(launchcode.executiveDierector).toEqual("Jeff");
  });

  test("Checking Percentage of cool employees", () =>
  {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test("Checking Programs Offered", () =>
  {
    expect(launchcode.programsOffered.length).toEqual(3);
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");

  });

  test("Checking for correct output", () =>
  {
    expect(typeof(launchcode.launchOutput('hi'))).toBe("string");
  });
  // Write your unit tests here!
  test("Checking for correct output of 2", () =>
  {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });

  test("Checking for correct output of 3", () =>
  {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });

  test("Checking for correct output of 5", () =>
  {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });
  
  test("Checking for correct output of 2 & 3", () =>
  {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });

  test("Checking for correct output of 2 & 5", () =>
  {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });

  test("Checking for correct output of 3 & 5", () =>
  {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  test("Checking for correct output of 2, 3, & 5", () =>
  {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("Checking for incorrect output of 2, 3, & 5", () =>
  {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
});