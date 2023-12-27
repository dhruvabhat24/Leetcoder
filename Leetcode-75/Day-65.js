/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    
    let bestInCash = 0;
    let bestWithStock = -Infinity;

    for (let i = 0; i < prices.length; i++) {
        let buyThisRound = bestInCash - prices[i]
        let sellThisRound = bestWithStock + prices[i] - fee

        // first option basically "do nothing this round"
        bestInCash = Math.max(bestInCash, sellThisRound)
        bestWithStock = Math.max(bestWithStock, buyThisRound)
    }

    return Math.max(bestWithStock, bestInCash)
};
