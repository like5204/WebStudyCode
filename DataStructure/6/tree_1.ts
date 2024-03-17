

class TreeNode<T>
{
	private value:T;
	private parentNode:TreeNode<T>|undefined = undefined;
	public childNode:TreeNode<T>[] = [];
	public ID:string = '';
		

	constructor(s:T){
		this.value = s
	}
	
	appendChild(value:TreeNode<T>)
	{
		value.parentNode = this;
		this.childNode.push(value);
	}

	removeChild(value:TreeNode<T>)
	{
		for(let i = 0; i < this.childNode.length; i++){
			if(this.childNode[i] == value)
				this.childNode.splice(i,1)
		}
	}

}

class Tree<T>
{
	private root:TreeNode<T|undefined>;

	constructor(s:T){
		this.root = new TreeNode<T>(s);
	}

	getRoot():TreeNode<T>|undefined{
		return this.root;
	}

	getByID(ID:string):TreeNode<T>|undefined{
		function find(node:TreeNode<T>){
			if(node.ID == ID)return node;
			else{
				for(let i = 0; i < node.childNode.length;i++){
					let res = find(node.childNode[i]);
					if(res) return res;
				}
			}
		}

		return find(this.root);
	}


}




let t = new Tree<string>('html');

console.log(t);

let head = new TreeNode<string>('head');
let body = new TreeNode<string>('body');

head.ID = 'head1';
body.ID = 'body1';

let div = new TreeNode<string>('div');
div.ID = 'div1';

let root = t.getRoot();

root.appendChild(head);
root.appendChild(body);

root.appendChild(div);
console.log(t);


console.log(t.getByID('div1'));











