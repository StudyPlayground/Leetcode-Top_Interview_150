import java.util.*;

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        
        Map<Character, Integer> magazineMap = new HashMap<>();

        for(int i = 0; i < magazine.length(); i++) {
            char letter = magazine.charAt(i);
            magazineMap.put(letter, magazineMap.getOrDefault(letter, 0) + 1);
        }

        for(int j = 0; j < ransomNote.length(); j++) {
            
            char letter = ransomNote.charAt(j);
            if(!magazineMap.containsKey(letter)) {
                return false;
            }

            if(magazineMap.get(letter) >= 1) {
                magazineMap.put(letter, magazineMap.get(letter) - 1);
            } else {
                return false;
            }
        }
        
        return true;
    }
}
