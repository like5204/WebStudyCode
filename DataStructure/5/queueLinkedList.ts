

//基于链表的队列

class queueLinkedList<T>
{
	private head = null;
	private tail = null;
	private length = null;


	enqueue(value:T)
	{
		if(this.tail){
			this.tail.next = {value, next:null, prev:this.tail};
			this.tail = this.tail.next;
		}
		else{
			this.head=this.tail={value, next:null, prev:null};
		}

		this.length++;
	}

	dequeue():T|undefined
	{
		if(this.head){
			let value = this.head.value;

			this.head = this.head.next;
			this.head.prev = null;
			this.length--;
			return value;
		}
		else return undefined;

	}

}

let qll = new queueLinkedList();

console.log(qll);

qll.enqueue(14);
qll.enqueue(40);
qll.enqueue(66);

console.log(qll);

console.log(qll.dequeue());

console.log(qll);
