import { sum } from "../util";
test("sum of two numbers", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 4)).toBe(5);
});
