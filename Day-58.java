
class Solution {
    public List<List<Integer>> combinationSum3(int k, int target) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(target, k, result, 1, new ArrayList<>(), 0);
        return result;
    }
    
    private void backtrack(int target, int k, List<List<Integer>> result, int index, List<Integer> currList,
                           int currSum) {
        if (currSum > target) return;
        if (currSum == target && currList.size() == k) result.add(new ArrayList<>(currList));
        for (int i = index; i < 10 && currList.size() <= k; ++i) {
            currList.add(i);
            backtrack(target, k, result, i + 1, currList, currSum + i);
            currList.remove(currList.size() - 1);
        }
    }
}
