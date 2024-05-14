class Solution {
    public int maxProfit(int[] prices) {
        
        int maxIndex = 0;
        int maxPrice = -1;
        int minIndex = 0;
        int minPrice = 10001;

        int maximumProfit = 0;

        for(int i = 0; i < prices.length; i++) {
            
            if(maxPrice <= prices[i]) {
                maxPrice = prices[i];
                maxIndex = i;
            }

            if(minPrice >= prices[i]) {
                minPrice = prices[i];
                minIndex = i;
            }

            if(maxIndex < minIndex) {
                maxPrice = prices[i];
                maxIndex = i;
            }

            if(minIndex < maxIndex) {
                maximumProfit = Math.max(maximumProfit, prices[maxIndex] - prices[minIndex]);
            }

        }
        return maximumProfit;
    }
}
