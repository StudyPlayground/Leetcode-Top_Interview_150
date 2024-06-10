class Solution {
    public boolean isPalindrome(String s) {
        
        char[] chs = s.toCharArray();
        int length = chs.length - 1;
        int start = 0;
        int end = length;
        

        boolean isPalindrome = false;

        for(int i = 0; ; i++) {

            start = getAlphabetPosition(chs, start, true);
            end = getAlphabetPosition(chs, end, false);

            if(start == end) {
                isPalindrome = true;
                break;
            }

            if(start >= length && end <= 0) {
                isPalindrome = true;
                break;
            }
            
            if(Character.toLowerCase(chs[start]) == Character.toLowerCase(chs[end])) {
                start += 1;
                end -= 1;
            } else {
                break;
            }

        }

        return isPalindrome;
    }

    public int getAlphabetPosition(char[] chs, int index, boolean direction) {

        adjustIndex(chs.length, index);

        while (index >= 0 && index < chs.length && !isAlphabet(chs[index])) {
            index += direction ? 1 : -1;
        }

        adjustIndex(chs.length, index);

        return index;
    }

    public boolean isAlphabet(char ch) {
        
        if(ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 48 && ch <= 57) {    
            return true;
        } else {
            return false;
        }
    }

    public int adjustIndex(int length, int index) {

        if (length <= index) {
            return index - 1;
        } else {
            return index + 1;
        }
        
    }

}
