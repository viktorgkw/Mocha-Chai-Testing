const { expect } = require("chai");
const { sumArray, hello } = require("../utils/index");

describe("sumArray", () => {
  it("should return correct result with arr of numbers", () => {
    // Arrange
    let array = [1, 2, 3];

    // Act
    let result = sumArray(array);

    // Assert
    expect(result).to.be.equal(6);
  });

  it("should return result with mixed data types", () => {
    // Arrange
    let mixedArray = [1, true, 3, "7"];

    // Act
    let result = sumArray(mixedArray);

    // Assert
    expect(result).to.be.equal(12);
  });

  it("should return NaN if input is not array", () => {
    // Arrange
    let invalidArray = "Invalid array";

    // Act
    let result = sumArray(invalidArray);

    // Assert
    expect(result).to.be.NaN;
  });
});

describe("hello", () => {
  it("should return Hello World!", () => {
    // Arrange
    // no input

    // Act
    let result = hello();

    // Assert
    expect(result).to.be.equal("Hello World!");
  });

  it("should return hello with the given parameter", () => {
    // Arrange
    let expectedOutput = "Ivane";

    // Act
    let result = hello(expectedOutput);

    // Assert
    expect(result).to.be.equal("Hello Ivane!");
  });
});
