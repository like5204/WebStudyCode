var THLinkedList = /** @class */ (function () {
    function THLinkedList() {
        //增加尾节点标记， 方便追加	
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    THLinkedList.prototype.append = function (value) {
        if (!this.tail) {
            this.head = this.tail = { value: value, next: null };
        }
        else {
            this.tail.next = { value: value, next: null };
            this.tail = this.tail.next;
        }
        this.length++;
    };
    return THLinkedList;
}());
var DoubleLinkedList = /** @class */ (function () {
    function DoubleLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    DoubleLinkedList.prototype.append = function (value) {
        if (!this.tail) {
            this.head = this.tail = { value: value, prev: null, next: null };
        }
        else {
            this.tail.next = { value: value, prev: this.tail, next: null };
            this.tail = this.tail.next;
        }
        this.length++;
    };
    DoubleLinkedList.prototype.pop = function () {
        //从最后取值
        var v;
        if (this.tail) {
            if (!this.head.next && !this.tail.prev) {
                v = this.head.value;
                this.head = this.tail = null;
            }
            else {
                var prev = this.tail.prev; //获得尾节点的前一个
                v = prev.next.value;
                prev.next = null;
                this.tail = prev;
            }
            this.length--;
        }
        return v;
    };
    return DoubleLinkedList;
}());
var dl = new DoubleLinkedList();
console.log(dl);
dl.append(10);
dl.append(20);
dl.append(30);
console.log(dl);
console.log(dl.pop());
console.log(dl);
