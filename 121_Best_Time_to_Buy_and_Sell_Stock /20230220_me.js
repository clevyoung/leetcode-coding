/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minVal = prices[0];
    let maxProfit = 0;
  
    for(let i=0; i < prices.length;i++){
        minVal = Math.min(minVal, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minVal);
    }
  
    return maxProfit
  
  };