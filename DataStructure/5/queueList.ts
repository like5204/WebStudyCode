

type LinkedListNode<T> = {
	value:T,
	next: LinkedListNode<T>|null,
	prev?: LinkedListNode<T>|null
}|null;


//基于线性表的队列


class queueList<T>
{
	private size = 10;
	private length = 0;
	private values = new Array<T>(this.size);

	enqueue(value:T)
	{
		this.values[this.length++] = value;

		this.realloc();
	}

	dequeue():T|undefined
	{
		if(this.length == 0){
			return undefined;
		}else{
			let value = this.values[0];

			for(let i = 1; i < this.length;i++){
				this.values[i-1] = this.values[i];
				//前一个等于后一个，从1开始向前挪一个格
			}
			this.length--;
			
			this.realloc();


			return value;
		}

	}


	realloc()
	{
		let new_values;
		if(this.length == this.size){
			this.size *= 2;
			new_values = new Array<T>(this.size);
		}else if(this.length < this.size/4){
			this.size = Math.floor(this.size/2);
			new_values = new Array<T>(this.size);
		}

		if(new_values){
			for(let i = 0; i < this.length; i++){
				new_values[i] = this.values[i];
			}

			this.values = new_values;
		}
	}


}


let ql = new queueList<number>();


console.log(ql);

ql.enqueue(15);

ql.enqueue(20);
ql.enqueue(3);
ql.enqueue(10);
ql.enqueue(5);
console.log(ql);


console.log(ql.dequeue());

console.log(ql);
