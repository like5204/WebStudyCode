

import LinkedListNode from './LinkNode';


//链表 head -> node -> node -> null

//type LinkedListNode<T> = {
//	value:T,
//	next:LinkedListNode<T>|null,
//	prev?:LinkedListNode<T>|null
//}|null;
//c语言使用结构体实现


// 普通链表实现
export default class LinkedList<T>{
	
	private head:LinkedListNode<T>  = null;
	private length = 0;
	
	
	//O(n)
	getItem(index:number)
	{
		//获取指定下标节点的value
		
		this.checkRange(index);

		

		let cur = this.nthNode(index);

		return !!cur?cur.value:null;

	}

	//O(n)
	setItem(index:number, value:T)
	{
		this.checkRange(index);

		
		let cur = this.nthNode(index);

		if(!cur)return;


		cur.value = value;

	}
	
	//O(n)
	append(value:T)
	{
		const tail = this.findTail();//追加，进入直接找最后一个节点
		if(!tail){	
			this.head = {
				value,
				next:null
			}
		}else{	
			tail.next = {
				value,
				next:null
			}
		}

		this.length++;
	}
	

	//O(n)
	insert(index:number, value:T)
	{
		//插入 
		//index     cur
		//  0       this.head
		//this.length append
		
		if(index < 0 || index > this.length)
			throw new RangeError;


		if(index == 0){
			let old = this.head;
			this.head = {value, next:old};

		}else if(index == this.length){
			
			this.append(value);
			return;//append中执行this.length++
		}else{
			let pre = this.nthNode(index - 1);

			let old = pre.next;//通过前节点获得当前节点
			pre.next = {value, next:old};//前节点指向插入节点,插入节点指向原来对节点
		}

		this.length++;

	}

	

	//O(n)
	delete(index:number)
	{
		//按下标删除数

		//0 - this.length-1;
		this.checkRange(index);
		
		if(index == 0){
			if(this.head){
				this.head = this.head.next;
			}
		}else{
			let prev = this.nthNode(index - 1);
			if(!prev)return;

			let cur = prev.next;
			
			prev.next = cur.next;//前一个的next指向我下一个

		}
		this.length--;
	}
		
	//O(n)	
	search(value:T)
	{
		//一个一个挨着搜索

		let cur = this.head;

		let i = 0;


		while(cur){
			if(cur.value == value)return i;

			cur = cur.next;
			i++;
		}

		return -1;

	}
	
	//O(n)
	nthNode(index:number)
	{
			
		//find item by index and return 

		// index == 0   this.head.value
		// index == 1   this.head.next.value
		// index == 2   this.head.next.next.value

		let cur = this.head;
		
		if(cur == null)return;//使用cur之前判断是否为null

		for(let i = 0; i < index; i++)
		{
			if(cur.next == null)return;

			cur = cur.next;
		}
		
		return cur;
	}
	//检查索引范围
	checkRange(index:number)
	{
		if(index < 0 || index >= this.length)
			throw new RangeError;
	}
	

	//O(n)
	findTail()
	{
		if(!this.head){
			return null;
		}else{
			let cur = this.head;

			while(cur.next){
				cur = cur.next;
			}
			//当cur.next是null时为尾节点
			return cur;
		}
	}
}




