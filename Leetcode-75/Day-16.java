class Solution {
    public int maxVowels(String s, int k) {
        int vowel = 0, count = 0;
        for(int i = 0; i < k; i++){
            char c = s.charAt(i);
            if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
                count++;
        }
        if(count > vowel)
            vowel = count;
        for(int i = k, j = 0; i < s.length(); i++,j++){
            char c = s.charAt(i);
            char ch = s.charAt(j);
            if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
                count++;
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
                count--;
            if(count >= k)
                return k;
            if(count > vowel)
                vowel = count;
        }
        return vowel;
    }
}
