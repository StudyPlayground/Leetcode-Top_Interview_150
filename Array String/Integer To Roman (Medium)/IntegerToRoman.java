class Solution {
    public String intToRoman(int num) {
        
        StringBuilder sb = new StringBuilder();
        int log10 = (int)Math.log10(num);
        while(log10 >= 0) {
            
            int placeValue = (int)Math.pow(10, log10);
            int digit = num / placeValue;

            romanSymbol(placeValue * digit, sb);
            num = num % placeValue;
            log10--;
        }

        return sb.toString();
    }

    public static void romanSymbol(int placeValue, StringBuilder sb) {
            
        while(placeValue > 0) {
            if(placeValue >= 1000) {
                placeValue -= 1000;
                sb.append('M');
            } else if(placeValue == 900)  {
                sb.append('C').append('M');
                placeValue -= 900;
            } else if(placeValue >= 500) {
                placeValue -= 500;
                sb.append('D');   
            } else if(placeValue == 400) {
                sb.append('C').append('D');
                placeValue -= 400;                                    
            } else if(placeValue >= 100) {
                placeValue -= 100;
                sb.append('C');
            } else if(placeValue == 90) {
                sb.append('X').append('C');
                placeValue -= 90;
            } else if(placeValue >= 50) {
                placeValue -= 50;
                sb.append('L');   
            } else if(placeValue == 40) {
                sb.append('X').append('L');
                placeValue -= 40;
            } else if(placeValue >= 10) {
                placeValue -= 10;
                sb.append('X');   
            } else if(placeValue == 9) {
                sb.append('I').append('X');
                placeValue -= 9;
            } else if(placeValue >= 5) {
                placeValue -= 5;
                sb.append('V');   
            } else if(placeValue == 4) {
                sb.append('I').append('V');
                placeValue -= 9;
            } else if(placeValue >= 1) {
                placeValue -= 1;
                sb.append('I');
            }
            
        }
    }
}
