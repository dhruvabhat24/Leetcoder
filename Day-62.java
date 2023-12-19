class Solution {
    public int numTilings(int n) {
        int MOD  =  1_000_000_000+7;
       
        if(n<=2) return n;
        long[]f =  new long[n+1];//n+1 size because , ans is at n index 
        long[]p =  new long[n+1];
        
        // base case 
        f[1] =1;f[2]=2;
        p[2] = 1;                        
		
        for(int i=3;i<n+1;i++){            
            f[i] = ( f[i-1]+f[i-2]+2*p[i-1])%MOD;
            p[i] =  (p[i-1]+f[i-2])%MOD; // for n=3, 2 col wil contribute partial fill and 1 column contribute fully filled             
        }        
        return (int)f[n];        
    }
   
}
