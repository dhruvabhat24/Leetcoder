class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;
        List<Integer> ls = new ArrayList<>();
        int i = 0, j = 0;
        
        while (i < m && j < n) {
            if (nums1[i] < nums2[j]) {
                ls.add(nums1[i++]);
            } else {
                ls.add(nums2[j++]);
            }
        }
        
        while (i < m) ls.add(nums1[i++]);
        while (j < n) ls.add(nums2[j++]);

        int mid = ls.size()/2;
        if(ls.size() % 2 == 0){
            return (ls.get(mid-1) + ls.get(mid))/2.0;
        }else{
            return ls.get(mid);
        }
    }
}
