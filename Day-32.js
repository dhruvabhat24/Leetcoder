const reverseList = (head) => {
    let current = head
    let prev = null
    let next = null
    
    while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
};
