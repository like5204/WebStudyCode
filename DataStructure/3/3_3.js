var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var List = /** @class */ (function () {
    function List() {
        this.size = 10; //标记数组大小
        this.values = new Array(this.size); //初始化数组
        this.length = 0;
    }
    //获取
    List.prototype.getItem = function (index) {
        this.checkRange(index);
        return this.values[index];
    };
    //设置 改变， 设置一个数，改变其位置
    List.prototype.setItem = function (index, value) {
        this.checkRange(index);
        this.values[index] = value;
    };
    //追加
    List.prototype.append = function (value) {
        //1.将值放入数组
        this.values[this.length++] = value; //存入值，并增加长度
        //2.检查数组是否装满
        this.realloc();
    };
    //插入
    List.prototype.insert = function (value, index) {
        if (index < 0 || index > this.length) {
            throw new RangeError;
        }
        else if (index == this.length) {
            this.append(value);
        }
        else {
            //index后的所有数据向后移动一个	
            for (var i = this.length; i > index; i--) {
                this.values[i] = this.values[i - 1];
            }
            this.values[index] = value;
            this.length++;
            this.realloc();
        }
    };
    List.prototype["delete"] = function (index) {
        this.checkRange(index);
        this.length--;
        for (var i = index; i < this.length; i++) {
            this.values[i] = this.values[i + 1];
        }
        this.realloc();
    };
    List.prototype.checkRange = function (index) {
        if (index < 0 || index >= this.length) {
            throw new RangeError;
        }
    };
    List.prototype.realloc = function () {
        //判断是否重新分配数组空间
        var new_values = null;
        if (this.size == this.length) {
            new_values = new Array(this.size * 2);
            this.size *= 2;
        }
        else if (this.length < this.size / 4) //小于容量的1/4时变换
         {
            var l = Math.floor(this.size / 2); //容量变到原来的一半
            new_values = new Array(l);
            this.size = l;
        }
        if (new_values) {
            for (var i = 0; i < this.length; i++) {
                new_values[i] = this.values[i];
            }
            delete this.values;
            this.values = new_values;
        }
    };
    List.prototype.search = function (value) {
        for (var i = 0; i < this.length; i++) {
            if (this.values[i] == value)
                return i;
        }
        return -1;
    };
    return List;
}());
var OrderList = /** @class */ (function (_super) {
    __extends(OrderList, _super);
    function OrderList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderList.prototype.append = function (value) {
        _super.prototype.append.call(this, value);
        this.adjest(this.length - 1);
    };
    OrderList.prototype.setItem = function (index, value) {
        _super.prototype.setItem.call(this, index, value);
        this.adjest(index);
    };
    OrderList.prototype.insert = function (value, index) {
        _super.prototype.insert.call(this, value, index);
        this.adjest(index);
    };
    OrderList.prototype.adjest = function (index) {
        //调整index位置的数
        if (index > 0 && this.values[index] < this.values[index - 1]) {
            //判断数向前移动
            for (var i = index; i > 0; i--) {
                if (this.values[i] < this.values[i - 1]) {
                    var tmp = this.values[i];
                    this.values[i] = this.values[i - 1];
                    this.values[i - 1] = tmp;
                }
                else
                    break;
            }
        }
        else if (index < this.length - 1 && this.values[index] > this.values[index + 1]) {
            //数向后面移动
            //video: i <= this.length-1 个人认为不应该统计this.length-1
            for (var i = index; i < this.length - 1; i++) {
                if (this.values[i] > this.values[i + 1]) {
                    var tmp = this.values[i];
                    this.values[i] = this.values[i + 1];
                    this.values[i + 1] = tmp;
                }
                else
                    break;
            }
            console.log(this.values[0]);
        }
    };
    OrderList.prototype.search = function (value) {
        var s = 0;
        var e = this.length - 1;
        while (s <= e) {
            var center = Math.floor((s + e) / 2);
            if (this.values[center] == value)
                return center;
            else if (this.values[center] < value) {
                s = center + 1;
            }
            else {
                e = center - 1;
            }
        }
        return -1;
    };
    return OrderList;
}(List));
var oList = new OrderList();
oList.append(3);
oList.append(7);
oList.append(8);
oList.append(10);
oList.append(99);
console.log(oList);
oList.setItem(2, 43);
console.log(oList);
