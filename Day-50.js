var maxScore = function(nums1, nums2, k) {
    // Create a reverse sorted array of [nums1(i), nums2(i)]
    const zip = nums1.map((x,i) => [x, nums2[i]]).sort((a,b) => b[1] - a[1]);
    let sum = 0, ans = 0;
    const pq = new MinPriorityQueue(); // Smallest element on top
    
    for(const [n1, n2] of zip) {
        // Insert element of nums1 in queue and also add to sum
        pq.enqueue(n1);
        sum += n1;

        // Now we get subsequence of k elements
        if(pq.size() === k) {
            ans = Math.max(ans, sum*n2); // Update our ans
            // Remove element from queue and also from sum
            sum -= pq.dequeue().element;
        }
    }

    return ans;
};
