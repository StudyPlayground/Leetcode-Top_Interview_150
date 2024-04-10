// 2차 (PASS)
// 시간, 공간 복잡도 감소 가능성 증가

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minBuyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const sellPrice = prices[i];
    maxProfit = Math.max(maxProfit, sellPrice - minBuyPrice);
    minBuyPrice = Math.min(minBuyPrice, sellPrice);
  }

  return maxProfit;
};

// 1차 (PASS)
// 로직 참고해서 풀었습니다.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const memo = {
    buyPrice: prices[0],
    profit: 0,
    maxProfit: 0,
  };

  for (const price of prices) {
    if (memo.buyPrice < price) {
      memo.profit = Math.max(price - memo.buyPrice, memo.profit);
      memo.maxProfit = Math.max(memo.profit, memo.maxProfit);
    }

    if (memo.buyPrice >= price) {
      memo.maxProfit = Math.max(memo.profit, memo.maxProfit);
      memo.buyPrice = price;
      memo.profit = 0;
    }
  }

  return memo.maxProfit;
};
