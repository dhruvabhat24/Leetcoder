/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1])
    x = intervals[0][1]
    count = 0

    for (let i = 1; i < intervals.length; i++) {
        y = intervals[i][0]
        if (x > y) 
            count ++ 
        else 
            x = intervals[i][1]
    }
    
    return count
};
