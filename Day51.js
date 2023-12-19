/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let pqLeft  = new MinPriorityQueue()
    let pqRight  = new MinPriorityQueue()
    let answer = 0
    let left = candidates
    let right = costs.length - candidates - 1
    let count = 0

    for (let i = 0; i < costs.length; i++) {
        if (i < left) pqLeft.enqueue(costs[i])
        else if (i > right) pqRight.enqueue(costs[i])
        
    }

    while(count < k) {
        count++
        let leftCandidate = pqLeft?.dequeue()?.element
        let rightCandidate = pqRight?.dequeue()?.element
        if (leftCandidate <= rightCandidate || !rightCandidate) {
            answer += leftCandidate
            if (rightCandidate) pqRight.enqueue(rightCandidate)
            if (left <= right) pqLeft.enqueue(costs[left++])
        } else {
            answer += rightCandidate
            if (leftCandidate) pqLeft.enqueue(leftCandidate)
            if (left <= right) pqRight.enqueue(costs[right--])
        }
    }
    return answer
};

