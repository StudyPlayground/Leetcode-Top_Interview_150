class Solution {
    
    static int[] jumps;

    public int jump(int[] nums) {


        if (nums.length <= 1) {
            return 0;
        } 
    
        jumps = new int[nums.length];
        
        recursiveMinJumps(nums, 0);

        return jumps[0];
    }

    private int recursiveMinJumps(int[] nums, int position) {
       
        if (position >= nums.length-1) {
            return 0;
        }

        if(nums[position] == 0) {
            return 10001;
        }

        if (jumps[position] > 0) {
            return jumps[position];
        }

        int minJump = 10001;
        for (int i = nums[position]; i >= 1; i--) {

            int result = recursiveMinJumps(nums, position + i);

            if (result < minJump) {
                minJump = result + 1;
            }
        }

        jumps[position] = minJump;
        return minJump;
    }
}
