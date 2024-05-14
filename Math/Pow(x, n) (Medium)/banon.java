class Solution {

    static Map<Integer, Double> memo;

    public double myPow(double x, int n) {

        memo = new HashMap<>();
        double result = pow(x, n);

        if (n < 0) {
            result = 1 / result;
        }

        return result;
    }

    public static double pow(double x, int n) {

        if (n == 0) {
            return 1.0;
        }

        if(n == 1) {
            return x;
        }

        if (memo.containsKey(n)) {
            return memo.get(n);
        }

        double devidedN = 0.0d;
        if (n % 2 == 0) {
            devidedN = pow(x, n / 2) * pow(x, n / 2);
        } else {
            devidedN = pow(x, n / 2) * pow(x, n / 2) * x;
        }

        memo.put(n, devidedN);
        return devidedN;
    }
}
