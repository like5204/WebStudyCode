//基于链表的队列
var queueLinkedList = /** @class */ (function () {
    function queueLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    queueLinkedList.prototype.enqueue = function (value) {
        if (this.tail) {
            this.tail.next = { value: value, next: null, prev: this.tail };
            this.tail = this.tail.next;
        }
        else {
            this.head = this.tail = { value: value, next: null, prev: null };
        }
        this.length++;
    };
    queueLinkedList.prototype.dequeue = function () {
        if (this.head) {
            var value = this.head.value;
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return value;
        }
        else
            return undefined;
    };
    return queueLinkedList;
}());
var qll = new queueLinkedList();
console.log(qll);
qll.enqueue(14);
qll.enqueue(40);
qll.enqueue(66);
console.log(qll);
console.log(qll.dequeue());
console.log(qll);
