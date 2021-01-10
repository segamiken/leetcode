function maxSubArray(nums: number[]): number {
    let maxSum = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < nums.length; i ++) {
        let sum: number = nums[i];
        if (sum > maxSum) {
            maxSum = sum;
        }
        for (let m = i + 1; m < nums.length; m ++) {
            sum += nums[m];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
};