class Solution {
    public int maxArea(int[] height) {

        int maximumAmountOfWater = 0;
        int start = 0;
        int end = height.length - 1;

        while(start < end) {
    
            int minHeight = Math.min(height[start], height[end]);
            int amountOfWater = minHeight * ((end+1) - (start+1));

            if(maximumAmountOfWater < amountOfWater) {
                maximumAmountOfWater = amountOfWater;
            }

            if(height[start] < height[end]) {
                start += 1;
            } else {
                end -= 1;
            }
            
        }
        return maximumAmountOfWater;
    }
}
