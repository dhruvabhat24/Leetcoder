class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> arr) {
        int n = arr.size();
        HashSet<Integer> hp = new HashSet<>();
        Queue<Integer> q = new LinkedList<>();
        q.add(0);
        hp.add(0);

        while(q.size()!=0){
            int a = q.remove();
            for(var x : arr.get(a)){
                if(!hp.contains(x)){
                    q.add(x);
                    hp.add(x);
                } 
            }
        }

        if(hp.size()==n) return true;
        else return false;
    }
}
