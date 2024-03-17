var TreeNode = /** @class */ (function () {
    function TreeNode(s) {
        this.parentNode = undefined;
        this.childNode = [];
        this.ID = '';
        this.value = s;
    }
    TreeNode.prototype.appendChild = function (value) {
        value.parentNode = this;
        this.childNode.push(value);
    };
    TreeNode.prototype.removeChild = function (value) {
        for (var i = 0; i < this.childNode.length; i++) {
            if (this.childNode[i] == value)
                this.childNode.splice(i, 1);
        }
    };
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree(s) {
        this.root = new TreeNode(s);
    }
    Tree.prototype.getRoot = function () {
        return this.root;
    };
    Tree.prototype.getByID = function (ID) {
        function find(node) {
            if (node.ID == ID)
                return node;
            else {
                for (var i = 0; i < node.childNode.length; i++) {
                    var res = find(node.childNode[i]);
                    if (res)
                        return res;
                }
            }
        }
        return find(this.root);
    };
    return Tree;
}());
var t = new Tree('html');
console.log(t);
var head = new TreeNode('head');
var body = new TreeNode('body');
head.ID = 'head1';
body.ID = 'body1';
var div = new TreeNode('div');
div.ID = 'div1';
var root = t.getRoot();
root.appendChild(head);
root.appendChild(body);
root.appendChild(div);
console.log(t);
console.log(t.getByID('div1'));
