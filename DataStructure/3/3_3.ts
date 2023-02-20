
class List<T>
{
	
	private size = 10;
	private length = 0;
	private values = new Array<T>(this.size);


	//getter, setter
	getItem(index:number)
	{
		this.checkRange(index);
		return this.values[index];
	}


	//1. 添加
	append(value:T)
	{
		this.values[this.length++] = value;

		this.realloc();

	}
	appendAll(vs:Array<T>)
	{
		for(let i = 0; i < vs.length; i++)
		{
			this.append(vs[i]);
		}
	}
	insert(index:number, value:T)
	{
		//
		if(index < 0 || index > this.length){
			throw new RangeError;
		}else if(index == this.length){
			this.append(value);
		}else
		{
			for(let i = this.length; i > index; i--)
			{
				this.values[i] = this.vlues[i-1];
			}

			this.values[index] = value;

			this.length++;

			this.realloc();
			//插入值之前的数据移动,确定起始下标
		}

	}


	//2.删除
	delete(index:number)
	{
		this.checkRange(index);

		let new_values = new Array<T>(this.size);
		let a = 0;

		for(let i = 0; i < this.length; i++)
		{
			if(i == index)continue;

			new_values[a] = this.values[i];
			a++;
		}

		delete this.values;
		this.values = new_values;

		this.length--;

		this.realloc();

	}

	//3.查找
	search(value:T)
	{
		
		for(let i = 0; i < this.length; i++)
		{
			if(this.values[i] == value)return i;
		}
		return -1;
	}


	//4.改
	setItem(index:number, value:T)
	{
		this.checkRange(index);	
		this.values[index] = value;
	}
	
	checkRange(index:number)
	{
		if(index < 0 || index > this.length){
			throw new RangeError;
		}
	}


	realloc()
	{
		if(this.length == this.size)
		{
			//膨胀
			this.size*=2;
		}
		else if(this.length < this.size/4)
		{
			//缩小
			this.size = Math.floor(this.size / 2);

		}

		let new_values = new Array<T>(this.size);
		for(let i = 0; i < this.length; i++)
		{
			new_values[i] = this.values[i];
		}
		
		delete this.values;

		this.values = new_values;


	}	
	
}	




let  list = new List<number>();


console.log(list);

list.appendAll([1,2,3,4,5,6]);



console.log(list);


list.appendAll([7,8,9,10]);

console.log(list);


list.delete(1);
list.delete(1);
list.delete(1);
list.delete(1);
list.delete(1);
console.log(list);


list.delete(1);
console.log(list);

list.append(67);
console.log(list);

