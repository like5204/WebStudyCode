export default class List<T>{
  protected values=new Array<T>(10);
  protected size=10;
  protected length=0;

  //O(1)
  getItem(index:number){
    this.chechRange(index);

    return this.values[index];
  }

  //O(1)
  //*
  setItem(index:number, value:T){
    this.chechRange(index);

    this.values[index]=value;
  }

  //2.添加
  //O(n)
  //*
  append(value:T){
    this.values[this.length++]=value;

    //超了
    this.realloc();
  }

  //3.插入
  //O(n)
  //*
  insert(value:T, index:number){
     if(index<0 || index>this.length){
       throw new RangeError();
     }else if(index==this.length){    //等同于append
       this.append(value);
     }else{
       //1.>=index的数据都向后移动一位
       for(let i=this.length-1;i>=index;i--){
         this.values[i+1]=this.values[i];
       }

       //2.新的数据放到index位置上
       this.values[index]=value;

       this.length++;

       this.realloc();
     }
   }

  //4.删除
  //O(n)
  delete(index:number){
     this.chechRange(index);

     delete this.values[index];

     //把后面的成员，往前拉
     for(let i=index+1;i<this.length;i++){
       this.values[i-1]=this.values[i];
     }
     this.length--;

     this.realloc();
   }

  //5.搜索
  //O(n)
  //**
  search(value:T){
    for(let i=0;i<this.length;i++){
      if(this.values[i]==value)return i;
    }

    return -1;
  }

   //检查空间是否已经满了——重新分配更大（膨胀）
   private realloc(){
     let new_values=null;

     //扩大
     if(this.length==this.size){  //满了
       //1.新的空间 大
       new_values=new Array<T>(this.size*2);
       this.size*=2;


     }

     //缩小
     else if(this.length<this.size/4){ //是否1/4
       new_values=new Array<T>(Math.floor(this.size/2));
       this.size=Math.floor(this.size/2);
     }


     if(new_values){
       //2.原来的数据 -> 新的空间
       for(let i=0;i<this.length;i++){
         new_values[i]=this.values[i];
       }

       //3.新的空间 替换 老的空间
       delete this.values;
       this.values=new_values;
     }
   }

   private chechRange(index:number){
     if(index<0 || index>=this.length){
       throw new RangeError();
     }
   }
}
