class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let output = 0;
        while(right < prices.length){
            if(prices[left] > prices[right]){
                left++;
            }else{
                let profit = prices[right] - prices[left];
                if(output < profit) output = profit;
                right++;
            }
        }
        return output;
    }
}
