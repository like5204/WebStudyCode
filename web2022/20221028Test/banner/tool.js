function MyStartMove(obj, str, Itaget) {
            clearInterval(obj.timer);

            obj.timer = setInterval(function()
            {
                let curr = parseInt(getStyle(obj, str));//获取对象当前属性值
                let speed = (Itaget - curr)/6;//根据目标和当前值, 计算速度==>匀速

                speed = speed>0?Math.ceil(speed):Math.floor(speed);//速度取整

                if(Itaget == curr)
                {
                    clearInterval(obj.timer);
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
