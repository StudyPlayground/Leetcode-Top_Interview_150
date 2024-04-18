class Solution {

    static boolean[] visited;

    public boolean canJump(int[] nums) {

        visited = new boolean[nums.length];

        if(nums.length == 1) {
            return true;
        }

        return canReachEnd(nums, 0);
        
    }

    public boolean canReachEnd(int[] nums, int position) {

        if(position >= nums.length-1) {
            return true;
        }

        if(visited[position]) {
            return false;
        }

        if(nums[position] == 0) {
            return false;
        }

        visited[position] = true;

        for(int i = nums[position]; i >= 1; i--) {
            
            if(canReachEnd(nums, position + i)) {
                return true;
            } 

            if(i == 1) {
                return false;
            }
        }
        return false;
    }
}
