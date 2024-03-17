//基于链表的堆栈
var stackLinkedList = /** @class */ (function () {
    function stackLinkedList() {
        this.tail = null;
        this.length = 0;
    }
    stackLinkedList.prototype.push = function (value) {
        if (this.tail) {
            //有尾节点
            this.tail.next = { value: value, prev: this.tail, next: null };
            this.tail = this.tail.next;
        }
        else {
            this.tail = { value: value, prev: null, next: null };
        }
        this.length++;
    };
    stackLinkedList.prototype.pop = function () {
        if (this.tail.prev) {
            var value = this.tail.value;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.length--;
            return value;
        }
        else if (this.tail) {
            var value = this.tail.value;
            this.tail = null;
            this.length--;
            return value;
        }
        else {
            return undefined;
        }
    };
    return stackLinkedList;
}());
var sll = new stackLinkedList();
console.log(sll);
sll.push(4);
sll.push(33);
sll.push(14);
sll.push(71);
console.log(sll);
console.log(sll.pop());
console.log(sll.pop());
//4, 33
console.log(sll);
