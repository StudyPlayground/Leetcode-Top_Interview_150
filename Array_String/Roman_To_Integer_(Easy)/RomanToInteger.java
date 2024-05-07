class Solution {
    public int romanToInt(String s) {
    
        char[] chars = s.toCharArray();

        int expected = 0;
        int subtraction = 0;
        for(int i = 0; i < chars.length - 1; i++) {
            if(romanValue(chars[i]) < romanValue(chars[i+1])) {
                int a = romanValue(chars[i+1]) + romanValue(chars[i]);
                int b = romanValue(chars[i+1]) - romanValue(chars[i]);
                subtraction += a - b;
            }
        }

        for(int i = 0; i < chars.length; i++) {
            expected += romanValue(chars[i]);
        }

        return expected - subtraction;
        
    }

     public static int romanValue(char c) {
        switch(c) {
            case 'I' : return 1;
            case 'V' : return 5;
            case 'X' : return 10;
            case 'L' : return 50;
            case 'C' : return 100;
            case 'D' : return 500;
            case 'M' : return 1000;
            default: return 0;
        }
    }
}
