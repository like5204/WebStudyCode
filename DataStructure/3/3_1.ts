

//创建（空）


//添加（追加)


//插入 (value, index)


class list<T>
{
	private  size = 10;//标记数组大小
	private  values = new Array<T>(this.size);//初始化数组
	private  length = 0;
	

	getItem(index:number)
	{
		if(index < 0 || index >= this.length){
			throw new RangeError;
		}else{
			return this.values[index];
		}
	}

	append(value:T)
	{
		//1.将值放入数组
		this.values[this.length++] = value;//存入值，并增加长度
		//2.检查数组是否装满

		this.realloc();
	}

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

	realloc()
	{
		//判断是否重新分配数组空间
		if(this.size == this.length)
		{
			let new_values = new Array<T>(this.size*2);
			
			for(let i = 0; i < this.length; i++)
			{
				new_values[i] = this.values[i];
			}

			delete this.values;

			this.values = new_values;

			this.size*=2;

		}

	}

}


let oList = new list();

console.log(oList);


oList.append(1);
oList.append(2);
oList.append(3);
oList.append(4);
oList.append(5);
oList.append(6);
oList.append(7);



oList.insert(101, 1);

oList.insert(102, 4);

oList.insert(103, 8);
oList.insert(103,7);

console.log(oList);


let v = oList.getItem(1);

console.log(v)
