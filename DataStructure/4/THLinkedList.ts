



type LinkedListNode<T> = {
	value:T,
	next: LinkedListNode<T>|null,
	prev?: LinkedListNode<T>|null
}|null;






class THLinkedList<T>
{
	//增加尾节点标记， 方便追加	


	private head:LinkedListNode<T>  = null;

	private tail:LinkedListNode<T>  = null;

	private length = 0;


	append(value:T)
	{
		if(!this.tail){
			this.head=this.tail={value,next:null};
		}else{
			this.tail.next = {value,next:null};
			this.tail = this.tail.next;
		}
		this.length++;

	}
}




class DoubleLinkedList<T>
{
	
	
	private head:LinkedListNode<T>  = null;

	private tail:LinkedListNode<T>  = null;

	private length = 0;


	append(value:T)
	{
		if(!this.tail){
			this.head = this.tail = {value, prev:null, next:null}
		}else{
			this.tail.next = {value, prev:this.tail, next:null}
			this.tail = this.tail.next;
		}
		this.length++;
	}


	pop()
	{
		//从最后取值
		let v;
		if(this.tail){
			if(!this.head.next && !this.tail.prev){
				v = this.head.value;
				this.head = this.tail = null;
			}else{
				let prev = this.tail.prev;//获得尾节点的前一个

				v = prev.next.value;

				prev.next = null;

				this.tail = prev;
			}
			this.length--;
		}

		return v;
			


	}
}


let dl = new DoubleLinkedList<number>();


console.log(dl);



dl.append(10);

dl.append(20);

dl.append(30);

console.log(dl);


console.log(dl.pop());

console.log(dl)

		

