class Solution {
    public int uniquePaths(int row, int col) {
        long ans = 1;
        for(int i=1 ; i<=row-1; i++){
            ans = ans * (col-1+i) / i;
        }
        return (int)ans;
    }
}
