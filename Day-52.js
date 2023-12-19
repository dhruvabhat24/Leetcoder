var successfulPairs = function(spells, potions, success) {
     potions.sort((a, b) => a - b);
     let ans = [];

     for(let spell of spells){
         let rel = success / spell;
         let l = 0, r = potions.length - 1;

         while(l <= r){
             let mid = Math.floor((l + r) / 2);
             if(potions[mid] < rel){
                 l = mid + 1;
             } else {
                 r = mid - 1;
             }
         }
        ans.push(potions.length - l);
     }    
   return ans;  
};
