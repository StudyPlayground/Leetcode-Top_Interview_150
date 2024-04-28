class Solution {
    public boolean isPalindrome(int x) {

    
        if(x < 0) {
            return false;
        }

        int number = x;
        int length = (int) Math.log10(x);
        int reverse = 0;

        while(x != 0) {
            
            int remainder = x % 10;
            int power = (int)Math.pow(10, length);
            reverse += remainder * power;
            x = x / 10;
            length--;
        }

        return number == reverse;
    }
}
