class Solution {
    public int longestOnes(int[] nums, int k) {
        int m=k;int c=0,max=0;int j=0;
        for(int i=0;i<nums.length;i++)
        {
           if(nums[i]==0&&m!=0){
                c++;
                m--;
                }
            else if(nums[i]==0&&m==0)
            {
                m=k;
                i=j;
                j++;
                if(c>max)
                    max=c;
                c=0;
            }
            else
                c++;
           }
         if(c>max)
            max=c;
        return max;
    }
}
