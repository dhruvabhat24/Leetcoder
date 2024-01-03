class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> ans=new ArrayList<>();
        part(s,ans,new ArrayList<String>());
        return ans;
    }
    public void part(String s,List<List<String>> ans,List<String> temp){
        if(s.length()==0){
            ans.add(new ArrayList<>(temp));
            return;
        }
        for(int i=1;i<=s.length();i++){
            String palin=s.substring(0,i);
            if(isPalindrome(palin)){
                temp.add(palin);
                part(s.substring(i),ans,temp);
                temp.remove(temp.size()-1);
            }
        }
    }
    public boolean isPalindrome(String str){
            int l=0;
            int r=str.length()-1;
	        if(l==r) return true;
	        while(l<r){
	            if(str.charAt(l)!=str.charAt(r)) return false;
	            l++;r--;
	        }
	        return true;
	    }
}
