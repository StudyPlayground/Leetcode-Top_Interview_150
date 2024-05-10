import java.util.ArrayList;

class Solution {
    public List<List<Integer>> combine(int n, int k) {
            List<List<Integer>> result = new ArrayList<>();
            List<Integer> chosen = new ArrayList<>();
            backtracking(n, k, 1, chosen, result);
            return result;
    }

    public static void backtracking(int n, int k, int start, List<Integer> chosen, List<List<Integer>> result) {
        if (chosen.size() == k) {
            result.add(new ArrayList<>(chosen));
            return;
        }

        for (int i = start; i <= n; i++) {
            chosen.add(i);
            backtracking(n, k, i + 1, chosen, result);
            chosen.remove(chosen.size() - 1);
        }
    }
}
