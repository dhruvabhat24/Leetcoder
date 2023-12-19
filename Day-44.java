class Solution {
    public int findCircleNum(int[][] isConnected) {
        
        int n = isConnected.length;
        int numOfComponents = n;
        
        UnionFind uf = new UnionFind(n);
        for(int i=0;i<n;i++){
            for(int j=i+1;j<n;j++){
                if(isConnected[i][j] ==1 && uf.find(i) != uf.find(j) ){
                    //connect these components
                    uf.union(i,j);
                    numOfComponents--;
                }
            }
        }
        
        return numOfComponents;
        
    }
    
    private class UnionFind{
        
        public int root[];
        public int rank[];
        
        public UnionFind(int size){
            root = new int[size];
            rank = new int[size]; // height 
            
            for(int i=0;i<size;i++){
                root[i] = i;
                rank[i] = 1;   // 1 height initially for all nodes
            }
            
        }
        
        public boolean isConnected(int x, int y){
            return find(x) == find(y);
        }
        
        public int find(int x){ //getRoot(i)
              
            if(x == root[x])return x;
            root[x] = find(root[x]);
            return root[x];
        }
        
        public void union(int x, int y){
            int rootX = find(x);
            int rootY = find(y);
            
            if(rootX != rootY){
                if(rank[rootX] > rank[rootX]){
                    root[rootY] = rootX;
                }
                else if(rank[rootX] < rank[rootY]){
                    root[rootX] = rootY;
                }
                else{
                    root[rootX] = rootY;
                    rank[rootY] += 1;
                }
            }
        }
    }
}
