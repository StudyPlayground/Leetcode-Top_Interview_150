class Solution {
    public int[] twoSum(int[] numbers, int target) {

        int[] indices = new int[2];
        int left = 0;
        int right = numbers.length - 1;
        
        while(left < right) {
            int sum = numbers[left] + numbers[right];
            if(sum == target) {
                indices[0] = left + 1;
                indices[1] = right + 1;
                break;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return indices;
    }
}
