import sum from "./sum";

test("sum should return 0 if no arguments are passed", () => {
  expect(sum()).toBe(0);
});

test("sum should return the same number if it's only one", () => {
  expect(sum(10)).toBe(10);
});

test("sum should return the result of two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});

test("sum should return the result of more than two numbers", () => {
  expect(sum(2, 3, 5, 10)).toBe(20);
});
