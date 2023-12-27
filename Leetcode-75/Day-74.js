var dailyTemperatures = function(temperatures) {
    const len = temperatures.length;
    
    const stack = [];
    const ans = new Array(len).fill(0);
    for(let i = 0; i < len; i++) {
        if(i == 0) stack.push([temperatures[i], i]);
        else {
            while(stack.length && stack.at(-1)[0] < temperatures[i]) {
                const prevIdx = stack.pop()[1];
                ans[prevIdx] = i - prevIdx; 
            }
            stack.push([temperatures[i], i]);
        }
    }
    return ans;
};
