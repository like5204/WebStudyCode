

//基于线性表的堆栈

class stackList<T>
{

	private length = 0;
	private size = 10;
	private values = new Array<T>(10);
	

	push(value:T)
	{
		//追加到最后

		this.values[this.length++] = value;
		
		this.realloc();
	}

	pop()
	{
		let v;
		//删除最后一个，并返回值
		if(this.length > 0){
			v = this.values[--this.length];
		}

		return v;
			
	}

	realloc()
	{
		let new_values;
		if(this.length == this.size){
			
			this.size *= 2;

			new_values = new Array<T>(this.size);
		}else if(this.length < this.size / 4){
			
			this.size = Math.floor(this.size / 2);

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

let sl = new stackList<number>();


console.log(sl);

sl.push(5);

sl.push(10);
sl.push(20);


console.log(sl);

console.log("first pop:" + sl.pop());

console.log(sl);
