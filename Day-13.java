class Solution {
    public int maxArea(int[] height) {
        int point1=0;
        int point2=height.length-1;
        int res=0;
        while(point1<point2){
            int min=Math.min(height[point1],height[point2]);
            int width=point2-point1;
            res=Math.max(res,min*width);


            if(height[point1]<height[point2]){
                      point1++;
            }
            else{
                point2--;
            }
        }
        return res;
    }
}
