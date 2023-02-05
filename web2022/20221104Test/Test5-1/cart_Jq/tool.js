function MyStartMove(obj, str, Itaget,fn)
        {
            clearInterval(obj.timer);

            obj.timer = setInterval(function()
            {
                let curr = parseInt(getStyle(obj, str));//获取对象当前属性值
                let speed = (Itaget - curr)/6;//根据目标和当前值, 计算速度==>匀速

                speed = speed>0?Math.ceil(speed):Math.floor(speed);//速度取整

                if(Itaget == curr)
                {
                    clearInterval(obj.timer);
		    if(fn)fn();
                }
                else
                {
                    obj.style[str] = curr + speed + 'px';
                }
            },30);
        }



	
function getStyle(obj, name)
{
	if(obj.currentStyle) return obj.currentStyle[name];
	else return getComputedStyle(obj,'')[name];
	 //返回xxx 属性值, 可能包含字符
}
function startMove_json(obj,json,s,fn)
{

        clearInterval(obj.timer);
        obj.timer=setInterval(function()
            {
                var x =true;
        for(var name in json)
        {
                var curre =0;
                if(name =='opacity')
                {
                    curre=Math.round(parseFloat(getStyle(obj,name))*100);
                    // console.log(curre);
                    //此时获取的是透明值小数。故*100
                }
                else
                {
                    curre = parseInt(getStyle(obj,name));
                }
                var speed=(json[name]-curre)/s;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                if(curre!=json[name])
                    x=false;
                if(name=='opacity')
                    {
                        obj.style.filter='alpha(opacity:'+(curre+speed)+')';
                        // console.log(curre+speed);
                        obj.style.opacity=(curre+speed)/100;
                    }
                    else
                    {
                        obj.style[name]=(curre+speed)+'px';
                    }
            }
            if(x)
            {
                clearInterval(obj.timer);
                if(fn)
                    fn();
            }
            },30);
    }
