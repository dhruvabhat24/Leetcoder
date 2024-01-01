class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<Integer> set = new ArrayList<>(nums.length);
        List<List<Integer>> subsets = new ArrayList<>((int)Math.pow(2, nums.length));
        findSubsets(0, nums, set, subsets);
        return subsets;
    }

    void findSubsets(int idx, int[] nums, List<Integer> set, List<List<Integer>> subsets) {
        if(idx == nums.length) {
            subsets.add(new ArrayList<>(set));
            return;
        }
        set.add(nums[idx]);
        findSubsets(idx+1, nums, set, subsets);
        set.remove(set.size()-1);
        findSubsets(idx+1, nums, set, subsets);
    }
}
