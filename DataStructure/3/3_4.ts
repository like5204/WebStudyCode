
//list

class List<T>
{
	//variable
	private length = 0;
	private size = 10;
	private values = new Array<T>(this.size);


	append(value:T)
	{
		this.values[this.length++] = value;

		this.realloc();
	}
	
	getItem(index:number)
	{
		this.checkRange(index);	

		return this.values[index];
	}

	setItem(index:number, value:T)
	{
		this.checkRange(index);

		this.values[index] = value;
	}

	insert(index:number, value:T)
	{
		if(index < 0 || index > this.length)
			throw new RangeError;

		if(index == this.length)
			this.append(value);
		else{
			this.length++;
			this.realloc();

			for(let i = this.length-1; i > index; i--)
			{
				this.values[i] = this.values[i-1];
			}

			this.values[index] = value;
		}

		
	}
	delete(index:number)
	{
		this.checkRange(index);

		this.length--;

		let new_arr = null;

		if(this.length < this.size / 4)
		{
			this.size = Math.floor(this.size / 2);

			new_arr = new Array<T>(this.size);

		}else{
			new_arr = new Array<T>(this.size);	
		}
		let a = 0;
		for(let i = 0; i <= this.length; i++)
		{
			if(i == index)continue;

			new_arr[a] = this.values[i];

			a++;
		}
		delete this.values;
		this.values = new_arr;


	}
	search(value:T)
	{
		for(let i = 0; i < this.length; i++)
		{
			if(this.values[i] == value)return i;
		}
		return -1;
	}

	checkRange(index:number)
	{
		if(index < 0 || index >= this.length)
			throw new RangeError;
	}

	
	realloc()
	{
	
		if(this.length == this.size)
		{
			//容量满了，更换新的
			this.size *= 2;
			let new_arr = new Array<T>(this.size);

			for(let i = 0; i < this.length; i++)
				new_arr[i] = this.values[i];

			delete this.values;
			

			this.values = new_arr;
		}
	}


	
}




let olist = new List<number>();


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
olist.insert(0,2);
olist.append(111);

olist.append(222);
console.log(olist);


olist.delete(1);
olist.delete(1);
olist.delete(1);
olist.delete(1);
olist.delete(1);
olist.delete(1);
console.log(olist);


