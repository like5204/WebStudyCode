

type LinkedListNode<T> = {
	value:T,
	next: LinkedListNode<T>|null,
	prev?: LinkedListNode<T>|null
}|null;



//基于链表的堆栈


class stackLinkedList<T>
{
	private tail:LinkedListNode<T>  = null;
	private length = 0;

	push(value:T)
	{
		if(this.tail){
			//有尾节点
			this.tail.next = {value, prev:this.tail, next:null};
			this.tail = this.tail.next;
		}
		else{
			this.tail = {value, prev:null, next:null};
		}  
		this.length++;
	}

	pop():T|undefined
	{
		if(this.tail.prev){
			let value = this.tail.value;
			this.tail.prev.next = null;
			this.tail = this.tail.prev;
			this.length--;
			return value;
		}
		else if(this.tail){
			let value = this.tail.value;
			this.tail = null;
			this.length--;
			return value;
		}else{
			return undefined;
		}
	}
}

let sll = new stackLinkedList<number>();

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


