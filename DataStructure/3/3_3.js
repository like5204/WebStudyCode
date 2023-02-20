var List = /** @class */ (function () {
    function List() {
        this.size = 10;
        this.length = 0;
        this.values = new Array(this.size);
    }
    //getter, setter
    List.prototype.getItem = function (index) {
        this.checkRange(index);
        return this.values[index];
    };
    //1. 添加
    List.prototype.append = function (value) {
        this.values[this.length] = value;
        this.length++;
        this.realloc();
    };
    List.prototype.appendAll = function (vs) {
        for (var i = 0; i < vs.length; i++) {
            this.append(vs[i]);
        }
    };
    List.prototype.insert = function (index, value) {
        this.checkRange();
        if (index == this.length) {
            this.append(value);
        }
        else {
            this.length++;
            for (var i = this.length; i > index; i--) {
                this.values[i] = this.vlues[i - 1];
            }
            //插入值之前的数据移动,确定起始下标
        }
        //2.删除
        delete (index);
        number;
        {
            if (index < 0 || index > this.length)
                throw new RangeError;
            var new_values = new Array(this.size);
            var a = 0;
            for (var i = 0; i < this.length; i++) {
                if (i == index)
                    continue;
                new_values[a] = this.values[i];
                a++;
            }
            delete this.values;
            this.values = new_values;
            this.length--;
            this.realloc();
        }
        //3.查找
        search(value, T);
        {
            for (var i = 0; i < this.length; i++) {
                if (this.values[i] == value)
                    return i;
            }
            return -1;
        }
        //4.改
        setItem(index, number, value, T);
        {
            this.checkRange(index);
            this.values[index] = value;
        }
        checkRange(index, number);
        {
            if (index < 0 || index > this.length) {
                throw new RangeError;
            }
        }
        realloc();
        {
            if (this.length == this.size) {
                //膨胀
                this.size *= 2;
            }
            else if (this.length < this.size / 4) {
                //缩小
                this.size = Math.floor(this.size / 2);
            }
            var new_values = new Array(this.size);
            for (var i = 0; i < this.length; i++) {
                new_values[i] = this.values[i];
            }
            delete this.values;
            this.values = new_values;
        }
    };
    return List;
}());
var list = new List();
console.log(list);
list.appendAll([1, 2, 3, 4, 5, 6]);
console.log(list);
list.appendAll([7, 8, 9, 10]);
console.log(list);
list["delete"](1);
list["delete"](1);
list["delete"](1);
list["delete"](1);
list["delete"](1);
console.log(list);
list["delete"](1);
console.log(list);
list.append(67);
console.log(list);
