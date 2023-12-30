class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> list = new ArrayList<>();
        backtrack(list, new ArrayList<>(), nums);
        return list;
    }

    private void backtrack(List<List<Integer>> list, List<Integer> tempList, int [] nums){
        if(tempList.size() == nums.length){
            list.add(new ArrayList<>(tempList));
        } else{
            for(int a = 0; a < nums.length; a++){
                if(tempList.contains(nums[a])) continue;
                tempList.add(nums[a]);
                backtrack(list, tempList, nums);
                tempList.remove(tempList.size()-1);
            }
        }
    } 
}
