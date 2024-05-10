class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtracking(result, nums, new ArrayList<Integer>());
        return result;
    }

    public void backtracking(List<List<Integer>> result, int[] nums, List<Integer> chosen) {
    if (chosen.size() == nums.length) { 
        result.add(new ArrayList<>(chosen));
        return;
    }

    for (int num : nums) {
        if (!chosen.contains(num)) {
            chosen.add(num);
            backtracking(result, nums, chosen);
            chosen.remove(chosen.size() - 1);
        }
    }
}
}
