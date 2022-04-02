function maximumWealth(accounts: number[][]): number {
  let customers_wealths = [];
  for (let i = 0; i < accounts.length; i++) {
    let customer_wealth = 0;
    for (let m = 0; m < accounts[i].length; m++) {
      customer_wealth = customer_wealth + accounts[i][m];
    }
    customers_wealths.push(customer_wealth);
  }
  const max_wealth = customers_wealths.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return max_wealth;
}

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
