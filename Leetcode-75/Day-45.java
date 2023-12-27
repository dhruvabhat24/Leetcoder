class Solution {
    public int minReorder(int n, int[][] connections) {

        HashMap<Integer,List<Integer>> adjc = new HashMap<>();
        HashSet<List<Integer>> edges = new HashSet<>();
        HashSet<Integer> visited = new HashSet();

        Queue<Integer> q = new LinkedList<>();
        int changes =0;


        for( int[] a : connections)
        {
            List<Integer> edge = new ArrayList();
            edge.add(a[0]);
            edge.add(a[1]);
            edges.add(edge);
            System.out.println(edge);

            List<Integer> l1 = adjc.getOrDefault(a[0],new ArrayList());
            List<Integer> l2 = adjc.getOrDefault(a[1],new ArrayList());

            l1.add(a[1]);
            l2.add(a[0]);
            adjc.put(a[0],l1);
            adjc.put(a[1],l2);
        }

        q.add(0);

        while(!q.isEmpty())
        {
            int node = q.poll();
            visited.add(node);

            for(Integer neigh : adjc.get(node))
            {
                if(!visited.contains(neigh))
                {
                    q.add(neigh);
                    List<Integer> nedge = new ArrayList();
                    nedge.add(neigh);
                    nedge.add(node);
                    
                    if(!edges.contains(nedge)) changes++;
                    
                }
            }
        }
        return changes;
    }
}
