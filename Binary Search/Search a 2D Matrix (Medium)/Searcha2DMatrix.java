class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {

        return binarySearch(matrix, target);
    }

    public static boolean binarySearch(int[][] matrix, int target) {

        int rows = matrix.length;
        int cols = matrix[0].length;
        int left = 0;
        int right = rows * cols - 1;

        while(left <= right) {

            int middle = left + (right - left) / 2;
            int value = matrix[middle / cols][middle % cols];

            if(value == target) {
                return true;
            }

            if(value < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return false;
    }
}
