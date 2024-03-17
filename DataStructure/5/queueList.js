//基于线性表的队列
var queueList = /** @class */ (function () {
    function queueList() {
        this.size = 10;
        this.length = 0;
        this.values = new Array(this.size);
    }
    queueList.prototype.enqueue = function (value) {
        this.values[this.length++] = value;
        this.realloc();
    };
    queueList.prototype.dequeue = function () {
        if (this.length == 0) {
            return undefined;
        }
        else {
            var value = this.values[0];
            for (var i = 1; i < this.length; i++) {
                this.values[i - 1] = this.values[i];
                //前一个等于后一个，从1开始向前挪一个格
            }
            this.length--;
            this.realloc();
            return value;
        }
    };
    queueList.prototype.realloc = function () {
        var new_values;
        if (this.length == this.size) {
            this.size *= 2;
            new_values = new Array(this.size);
        }
        else if (this.length < this.size / 4) {
            this.size = Math.floor(this.size / 2);
            new_values = new Array(this.size);
        }
        if (new_values) {
            for (var i = 0; i < this.length; i++) {
                new_values[i] = this.values[i];
            }
            this.values = new_values;
        }
    };
    return queueList;
}());
var ql = new queueList();
console.log(ql);
ql.enqueue(15);
ql.enqueue(20);
ql.enqueue(3);
ql.enqueue(10);
ql.enqueue(5);
console.log(ql);
console.log(ql.dequeue());
console.log(ql);
