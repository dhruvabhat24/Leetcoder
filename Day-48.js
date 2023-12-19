/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
    let ROW = grid.length, COL = grid[0].length;
    let totalFresh = 0, queue = [];
    
    for(let i=0; i<ROW; i++){
        for(let j=0; j<COL; j++){
            if(grid[i][j] == 2) queue.push([i,j])   
            if(grid[i][j] == 1) totalFresh++;  
        }
    }
    
    let timeElapse = -1, totalRotted = 0;
    let dirs = [
        [-1, 0], // top
        [0, 1], // right
        [1, 0], // bottom
        [0, -1] // left
    ]
    
    // keep looping untill we no more have rotten oranges left
    while(queue.length){
        let rotSize = queue.length;
        
        // pop all the current rotted oranges and rot their all 4 direction connected fresh oranges
        while(rotSize>0){
            let pop = queue.shift();
            
            // check all 4 direction
            for(let k=0; k<4; k++){
                let row = pop[0] + dirs[k][0];
                let col = pop[1] + dirs[k][1];
                
                // if the row, col are in bound and has fresh orange then rot it 
                // and push the newly rotted in queue.
                if(row>=0 && row<ROW && col>=0 && col<COL && grid[row][col] == 1){
                    grid[row][col] = 2;
                    totalRotted++;
                    queue.push([row, col]);
                }  
            }
            rotSize--;
        }
        timeElapse++; // +1 the elapsed time
    }
    
    //if total rotted are equal to initial total fresh, means all fresh are rotted,
    //else return -1. Alse check if there were no rotted oranges? return 0 in this case
    return totalRotted == totalFresh? timeElapse == -1? 0 : timeElapse : -1;  
};
