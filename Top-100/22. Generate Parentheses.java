class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList();
        findAll("(",1,0,res,n);

        return res;
    }

    void findAll(String current,int op , int cl , List<String> res, int n){
        if(current.length()==2*n){
            res.add(current);
            return;
        }
        if(op<n)
        findAll(current+"(", op+1,cl,res,n);
        if(cl<op)
        findAll(current+")",op,cl+1,res,n);
    }
}
