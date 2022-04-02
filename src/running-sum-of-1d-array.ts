function runningSum(nums: number[]): number[] {
  let answers: number[] = [];
  let running_sum = 0;
  for (let i = 0; i < nums.length; i++) {
    running_sum = running_sum + nums[i];
    answers.push(running_sum);
  }
  return answers;
}

console.log(runningSum([1, 2, 3, 4]));
