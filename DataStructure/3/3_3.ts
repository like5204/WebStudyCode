class List<T>
{
	protected  size = 10;//标记数组大小
	protected  values = new Array<T>(this.size);//初始化数组
	protected  length = 0;
	
	//获取
	getItem(index:number)
	{
		this.checkRange(index);
		return this.values[index];
		
	}

	//设置 改变， 设置一个数，改变其位置
	setItem(index:number, value:T)
	{
		this.checkRange(index);
		
		this.values[index] = value;
	}
	//追加
	append(value:T)
	{
		//1.将值放入数组
		this.values[this.length++] = value;//存入值，并增加长度
		//2.检查数组是否装满

		this.realloc();
	}

	//插入
	insert(value:T, index:number)
	{
		if(index < 0 || index > this.length){
			throw new RangeError;
		}else if(index == this.length){
			this.append(value);
		}else{
			//index后的所有数据向后移动一个	
			for(let i = this.length; i > index; i--)
			{
				this.values[i] = this.values[i-1];
			}

			this.values[index] = value;
		
			this.length++;

			
			this.realloc();
		}

	}

	delete(index:number)
	{
		this.checkRange(index);
		this.length--;

		for(let i = index; i < this.length; i++)
		{
			this.values[i] = this.values[i+1];
		}

		this.realloc();
			
	}

	checkRange(index:number)
	{
		
		if(index < 0 || index >= this.length){
			throw new RangeError;
		}
	}

	private realloc()
	{
		//判断是否重新分配数组空间

		let new_values = null;

		if(this.size == this.length)
		{
			new_values = new Array<T>(this.size*2);
			
			this.size*=2;

		}
		else if(this.length < this.size/4)//小于容量的1/4时变换
		{

			let l = Math.floor(this.size / 2);//容量变到原来的一半

			new_values = new Array<T>(l);

			this.size = l;
		}
		

		if(new_values)
		{
			
			for(let i = 0; i < this.length; i++)
			{
				new_values[i] = this.values[i];
			}

			delete this.values;

			this.values = new_values;


		}


	}


	search(value:T)
	{
		for(let i = 0; i < this.length;i++)
		{
			if(this.values[i] == value)return i;
		}

		return -1;
	}
		

}





class OrderList<T> extends List<T>
{
	append(value:T)
	{
		super.append(value);

		this.adjest(this.length-1);
	}

	setItem(index:number, value:T)
	{
		super.setItem(index, value);

		this.adjest(index);
	}
	

	insert(value:T, index:number)
	{
		super.insert(value, index);

		this.adjest(index);
	}

	adjest(index:number)
	{
		//调整index位置的数

		if(index > 0 && this.values[index] < this.values[index-1])
		{
			//判断数向前移动

			for(let i = index; i > 0; i--)
			{
				if(this.values[i] < this.values[i-1])
				{
					let tmp = this.values[i];
					this.values[i] = this.values[i-1];
					this.values[i-1] = tmp;
				}
				else break;
			}

		}
		else if(index < this.length-1 && this.values[index] > this.values[index+1])
		{
			//数向后面移动
			//video: i <= this.length-1 个人认为不应该统计this.length-1
			for(let i = index; i < this.length-1; i++)
			{
				if(this.values[i] > this.values[i+1])
				{
					let tmp = this.values[i];
					this.values[i] = this.values[i+1];
					this.values[i+1] = tmp;

				}
				else break;
			
			}

			console.log(this.values[0]);

					
		}
	}

	search(value:T)
	{
		let s = 0;
		let e = this.length - 1;

		while(s <= e)
		{
			let center = Math.floor((s+e)/2);

			if(this.values[center] == value)return center;
			else if(this.values[center] < value){
				s = center + 1;
			}else{
				e = center - 1;
			}

		}
		return -1;
	}

}


	
let oList = new OrderList<number>();



oList.append(3);
oList.append(7);
oList.append(8);
oList.append(10);
oList.append(99);


console.log(oList);


oList.setItem(2, 43);

console.log(oList);








