function arrangeCoins(n: number): number {
    let sum = 0;
    let cycle = 0; 
    for (let i = 1; sum < n; i++ ) {
        sum = sum + i;
        if (sum <= n) {
            cycle ++;   
        }
    }
    return cycle;
};

console.log(arrangeCoins(5));