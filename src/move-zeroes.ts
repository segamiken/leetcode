function moveZeroes(nums: number[]): void {
  const length = nums.length;
  for (let i = length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(nums[i]);
      nums.splice(i, 1);
    }
  }
}
