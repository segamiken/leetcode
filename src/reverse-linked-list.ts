class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let nextTemp = curr.next;

    curr.next = prev;

    prev = curr;
    console.log(prev);

    //一個深入りする
    curr = nextTemp;
  }
  return prev;
}

// ListNode {
//     val: 1,
//     next: {
//         val: 2,
//         next {
//             val: 3,
//             next {
//                 val: 0
//             }
//         }
//     }
// }
