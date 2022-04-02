//This is faster, but use a lot of memory.
function majorityElement(nums: number[]): number {
  let max: number = 0;
  let majorityElement: number = 0;
  let sameNums: number[];
  for (let i = 0; i < nums.length; i++) {
    sameNums = nums.filter((value) => {
      return value === nums[i];
    });
    if (sameNums.length > max) {
      max = sameNums.length;
      majorityElement = nums[i];
    }
    nums = nums.filter((value) => {
      return value !== nums[i];
    });
  }
  return majorityElement;
}

//bruto force
//This is slower, but memory usage is better than majorityElement()
function majorityElement2(nums: number[]): number | undefined {
  let majorityCount = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    for (let m = i + 1; m < nums.length; m++) {
      if (nums[m] === nums[i]) {
        count++;
      }
    }
    if (count > majorityCount) {
      return nums[i];
    }
  }
}
