import List from './list';

export default class OrderList<T> extends List<T>{
  setItem(index:number, value:T){
    super.setItem(index, value);

    this.adjest(index);
  }

  append(value:T){
    super.append(value);

    this.adjest(this.length-1);
  }

  insert(value:T, index:number){
    super.insert(value,index);

    this.adjest(index);
  }

  search(value:T){
    let s=0;
    let e=this.length-1;

    while(s<=e){
      let center=Math.floor((s+e)/2);

      if(this.values[center]==value)return center;
      else if(this.values[center]<value){  //往右看
        s=center+1;
      }else{    //往左看
        e=center-1;
      }
    }

    return -1;
  }

  // O(n)
  private adjest(index:number){
    //往前调整    我比前面的还小
    if(index>0 && this.values[index-1]>this.values[index]){
      for(let i=index;i>0;i--){
        if(this.values[i-1]>this.values[i]){
          let tmp;

          tmp=this.values[i-1];
          this.values[i-1]=this.values[i];
          this.values[i]=tmp;
        }else{
          break;
        }
      }
    }

    //往后调整    我比后面的还大
    else if(index<this.length-1 && this.values[index+1]<this.values[index]){
      for(let i=index;i<=this.length-1;i++){
        if(this.values[i+1]<this.values[i]){
          let tmp;

          tmp=this.values[i+1];
          this.values[i+1]=this.values[i];
          this.values[i]=tmp;
        }else{
          break;
        }
      }
    }
  }
}
