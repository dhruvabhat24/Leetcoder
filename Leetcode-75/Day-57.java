class Solution {
    public List<String> letterCombinations(String digits) {
       List<String> res=new ArrayList<>();
       if(digits.length()==0) return res;
       Map<Character,String> hm=new HashMap<>();
        hm.put('2',"abc");
        hm.put('3',"def");
        hm.put('4',"ghi");
        hm.put('5',"jkl");
        hm.put('6',"mno");
        hm.put('7',"pqrs");
        hm.put('8',"tuv");
        hm.put('9',"wxyz");

        backTrack(digits,0,hm,new StringBuilder(),res);
        return res;
    }
    private static void backTrack(String digits, int i,Map<Character,String> hm,StringBuilder sb,List<String>res){
       if(i==digits.length()){
          res.add(sb.toString());
       return;
       }
        
        String curr=hm.get(digits.charAt(i));
        for(int k=0;k<curr.length();k++){
            sb.append(curr.charAt(k));
            backTrack(digits, i+1, hm,  sb, res);
            sb.deleteCharAt(sb.length() -1);
        }
    }
}
