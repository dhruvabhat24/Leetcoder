class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int prevOne = 0;
        int prevTwo = 0;
        
        for (int i = cost.length - 1; i >= 0; i--) {
            int currentCost = cost[i] + Math.min(prevOne, prevTwo);
            prevTwo = prevOne;
            prevOne = currentCost;
        }
        
        return Math.min(prevOne, prevTwo);
    }
}
