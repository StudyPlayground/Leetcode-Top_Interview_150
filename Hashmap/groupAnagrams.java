class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
        Map<String, List<String>> anagramMap = new HashMap<>();
        for(String str : strs) {

            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            
            anagramMap.computeIfAbsent(String.valueOf(chars), key -> new ArrayList<>()).add(str);
            
        }

        List<List<String>> anagramList = new ArrayList<>(anagramMap.values());
        return anagramList;
    }
}
