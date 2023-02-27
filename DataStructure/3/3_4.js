//list
var List = /** @class */ (function () {
    function List() {
        //variable
        this.length = 0;
        this.size = 10;
        this.values = new Array(this.size);
    }
    List.prototype.append = function (value) {
        this.values[this.length++] = value;
        this.realloc();
    };
    List.prototype.getItem = function (index) {
        this.checkRange(index);
        return this.values[index];
    };
    List.prototype.setItem = function (index, value) {
        this.checkRange(index);
        this.values[index] = value;
    };
    List.prototype.insert = function (index, value) {
        if (index < 0 || index > this.length)
            throw new RangeError;
        if (index == this.length)
            this.append(value);
        else {
            this.length++;
            this.realloc();
            for (var i = this.length - 1; i > index; i--) {
                this.values[i] = this.values[i - 1];
            }
            this.values[index] = value;
        }
    };
    List.prototype["delete"] = function (index) {
        this.checkRange(index);
        this.length--;
        var new_arr = null;
        if (this.length < this.size / 4) {
            this.size = Math.floor(this.size / 2);
            new_arr = new Array(this.size);
        }
        else {
            new_arr = new Array(this.size);
        }
        var a = 0;
        for (var i = 0; i <= this.length; i++) {
            if (i == index)
                continue;
            new_arr[a] = this.values[i];
            a++;
        }
        delete this.values;
        this.values = new_arr;
    };
    List.prototype.search = function (value) {
        for (var i = 0; i < this.length; i++) {
            if (this.values[i] == value)
                return i;
        }
        return -1;
    };
    List.prototype.checkRange = function (index) {
        if (index < 0 || index >= this.length)
            throw new RangeError;
    };
    List.prototype.realloc = function () {
        if (this.length == this.size) {
            //容量满了，更换新的
            this.size *= 2;
            var new_arr = new Array(this.size);
            for (var i = 0; i < this.length; i++)
                new_arr[i] = this.values[i];
            delete this.values;
            this.values = new_arr;
        }
    };
    return List;
}());
var olist = new List();
console.log(olist);
olist.append(3);
olist.append(5);
olist.append(8);
olist.append(99);
olist.append(57);
console.log(olist);
console.log(olist.getItem(3));
olist.insert(2, 6);
olist.insert(5, 100);
olist.insert(0, 2);
olist.append(111);
olist.append(222);
console.log(olist);
olist["delete"](1);
olist["delete"](1);
olist["delete"](1);
olist["delete"](1);
olist["delete"](1);
olist["delete"](1);
console.log(olist);
