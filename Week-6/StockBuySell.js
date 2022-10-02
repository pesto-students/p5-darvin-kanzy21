let prices = [7,6,4,3,1];

function returnProfit(prices){
    max_profit = 0;
    for(let i = prices.length-1; i >=0;i--){ //O(n)
        //Go through the elements behind it.
        for(let j = i - 1; j > -1; j--){  //O(n)
            if(prices[i]-prices[j]>max_profit){
                max_profit=prices[i]-prices[j]
            }
        }
    };
    return max_profit
}

console.log(returnProfit(prices));

// TC : O(n^2)
// SC : O(1)