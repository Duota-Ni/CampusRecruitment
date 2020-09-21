function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reversePrint = function (head) {
  let res = [];
  while (head != null) {
    res.unshift(head.val)
    head.next()
  }
};