
//var app = require("../app/fizzBuzz.js");

describe("Fizz Buzz tests ", function() {
  
  it("should return `Fizz` for number divisible by 3", function() {
    expect(app.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Fizz` for number divisible by 3", function() {
    expect(app.fizzBuzz(6)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(app.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(app.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(app.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(app.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(app.fizzBuzz(120)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(app.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(app.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(app.fizzBuzz(101)).toBe(101);
  });

  it("should return string not allowed since its a string", function() {
    expect(app.fizzBuzz('5')).toBe('string not allowed');
  });


});
