/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {

    let fast = head;
    let slow = head;
    let stack = []; 
    maximum = 0;
    while(fast){
            stack.push(slow.val);
            slow=slow.next;
            fast= fast.next.next;
    }
    while(slow){
        sum = stack.pop() + slow.val;
        if(maximum < sum ) {
            maximum = sum;
        }
        slow = slow.next;
    }
    return maximum;
    
};
