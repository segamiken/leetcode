function shuffle(nums: number[], n: number): number[] {
    const fastHalfNums = nums.filter((currentValue, index) => index < n);
    const laterHalfNums = nums.filter((currentValue, index) => index >= n);
    
    const answer = [];
    for (let i = 0; i < fastHalfNums.length; i ++) {
        answer.push(fastHalfNums[i]);
        answer.push(laterHalfNums[i]);
    }
    return answer;
};