function maxProfit(prices) {
    let minPrice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            minPrice = Math.min(minPrice, prices[i])
        }
    }
    let maxPrice = minPrice;
    for (let i = prices.indexOf(minPrice); i < prices.length; i++) {
        if (prices[i] > prices[i + 1]) {
            maxPrice = Math.max(maxPrice, prices[i])
        }
    }
    return maxPrice - minPrice;
}

const prices = [7, 1, 5, 3, 6, 4];
//const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));

function maxProfitV2(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
}

console.log(maxProfitV2(prices));