class Solution {
    public boolean isSubsequence(String s, String t) {
        
        char[] chs = s.toCharArray();
        char[] cht = t.toCharArray();

        int i = 0;
        int j = 0;
        boolean isSubSequence = false;
        while(true) {

            if(i >= chs.length) {
                return true;
            }

            if(j >= cht.length) {
                return false;
            }

            if(chs[i] == cht[j]) {
                i += 1;
                j += 1;
            } else {
                j += 1;
            }
        }
    }
} 
