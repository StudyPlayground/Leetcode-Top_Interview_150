class Solution {
    public boolean canJump(int[] nums) {
        // 현재까지 이동할 수 있는 최대 인덱스를 저장하는 변수
        int maxJump = 0;
        // 배열의 길이를 저장하는 변수
        int length = nums.length;
        
        // 배열의 길이가 1인 경우 마지막 인덱스에 도달했으므로 true 를 반환
        if(length == 1) {
            return true;
        }
        
        // 배열을 순회하면서 이동 가능한 최대 인덱스를 갱신
        for(int i = 0; i < nums.length; i++) {
            // 현재 위치가 현재까지 이동할 수 있는 최대 인덱스를 넘어선 경우
            if(i > maxJump) {
                // 더 이상 이동할 수 없으므로 false 반환
                return false;
            }

            // 현재 위치에서 이동할 수 있는 최대 인덱스 갱신
            maxJump = Math.max(i + nums[i], maxJump);

            // 마지막 인덱스에 도달할 수 있는 경우 true 반환
            if(maxJump >= length) {
                return true;
            }
        }

        // 배열을 모두 순회 했지만, 인덱스에 도달할 수 없는 경우 false 반환
        return false;
    }
}
