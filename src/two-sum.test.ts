import { twoSum } from "./two-sum";

describe("正常系", () => {
  test("twoSum1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("twoSum2", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
});

describe("異常系", () => {
  test("twoSum1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).not.toEqual([0, 0]);
  });

  test("twoSum2", () => {
    expect(twoSum([3, 2, 4], 6)).not.toEqual([0, 0]);
  });
});
