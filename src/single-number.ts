// Input: nums = [2,2,1]
// Output: 1

// Input: nums = [4,1,2,1,2]
// Output: 4

// Input: nums = [1]
// Output: 1

// My Solution
function singleNumber(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        const copiedNums = nums.slice();
        copiedNums.splice(i, 1);
        if (!copiedNums.includes(nums[i])) {
            return nums[i];
        }
    }
};

// List Operation
function singleNumber2(nums: number[]): number {
    let noDuplicateNums: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (noDuplicateNums.includes(nums[i])) {
            noDuplicateNums = noDuplicateNums.filter((currentValue) => {
                return currentValue !== nums[i];
            });
        } else {
            noDuplicateNums.push(nums[i])   
        }
    }
    return noDuplicateNums[0];
};