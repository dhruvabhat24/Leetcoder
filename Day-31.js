/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head || !head.next){
        return head
    }
    let flag = true
    let odd = head
    let even = head.next
    let headofEven= head.next
    let temp = head.next.next
    while(temp){
        if(flag){
            odd.next=temp
            odd=odd.next
        }
        else{
            even.next=temp
            even=even.next
        }
        temp=temp.next
        flag=!flag
    }
    odd.next = headofEven
    even.next=null
    return head
};
