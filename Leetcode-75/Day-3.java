class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
       int maxCandies = findMaxCandies(candies);
        List<Boolean> result = new ArrayList<>();      
        for (int i = 0; i < candies.length; i++) {
            result.add(candies[i] + extraCandies >= maxCandies);
        }   
        return result;
    }
    private int findMaxCandies(int[] candies) {
        int maxCandies = candies[0];
        for (int i = 1; i < candies.length; i++) {
            maxCandies = Math.max(maxCandies, candies[i]);
        }
        return maxCandies; 
    }
}
