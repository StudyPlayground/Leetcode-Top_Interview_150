class Solution {
    public int searchInsert(int[] nums, int target) {

        int minValue = nums[0];
        int maxValue = nums[nums.length - 1];

        if(target < minValue) {
            return 0;
        }

        if(target > maxValue) {
            return nums.length;
        }

        return binarySearch(nums, target);
    }

    public int binarySearch(int[] nums, int target) {

        int left = 0;
        int right = nums.length - 1;
        int middle = 0;

        while(left <= right) {

            middle = left + (right - left) / 2;
            
            if(nums[middle] == target) {
                return middle;
            }

            if(nums[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }

        }
        return left;
    }
}
