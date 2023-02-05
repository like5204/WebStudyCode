
function updateSumPrice()
{
	let dynPrice = $("main tbody td:nth-of-type(6)");//数量 * 单价
	let oSumPce = $(".bj+td>span");
	
	let aRadio = Array.from($(".option"));

	let oSumRadio = aRadio.filter(item=>item.x==1);

	
	let price = 0;

	for(let i = 0; i < oSumRadio.length; i++)
	{
		let dynPrice = oSumRadio[i].parentElement.parentElement.querySelector("td:nth-of-type(6)").innerText;
		
		price += parseFloat(dynPrice);
		
	}

	price = Math.round(price*100)/100;
	
	oSumPce[0].innerText = price;
}


function setAllOption()
{
	let oAll = $(".all");
	let oAll2 = $(".lall");;
	let x = false;//标记全选按钮的初始状态
	let oSum = $(".bj");
	let aRadio = Array.from($(".option"));

	oAll.on('click',clickAll);
	oAll2.on('click',clickAll);
	oSum[0].n=0;
	
	function clickAll()
	{
		if(!x)
		{
			//全选按钮选中时,所有的单选按钮选中并标记单选按钮的x为1
			oAll2[0].checked=oAll[0].checked=!0;
			aRadio.map(item=>{item.checked=!0;item.x=1;})
			oSum[0].n = aRadio.length;
			setSumGoods();
		}
		else
		{
			//全选按钮选中时点击触发
			oAll[0].checked=oAll2[0].checked=!1;
			oSum[0].n=0;
			setSumGoods();
			Array.from(aRadio).map(item=>{item.checked=!1;item.x=0;})
		}
		updateSumPrice();	
		x=!x;//点击一次，修改标记一次
	}

	function setSumGoods()
	{
			oSum[0].innerText = "商品总数:"+oSum[0].n+"件";
	}


	for(let ra of aRadio)
	{
		ra.x=0;//给所有radio标记
		ra.onclick=function()
		{
			if(this.x==0)
			{
				oSum[0].n+=1;
				setSumGoods();
				//当单选按钮未被选中时,此时切换该按钮状态为选中
				this.x=1;

				if( aRadio.every(item=>item.checked))
				{
					//判断所有的单选是否都选中
					oAll[0].checked=oAll2[0].checked=!0;
					x=!0;//修改全选标记
				}
			}
			else
			{
				//当单选按钮已被选中,切换为不选中
				if(oAll[0].checked)oAll[0].checked=oAll2[0].checked=!1;
				oSum[0].n-=1;
				setSumGoods();
				this.checked=false
				this.x=0;
			}
			updateSumPrice();
		}
	}
}
function updateGoodsNum()
{

	let oBtn_add = $(".add");
	let oBtn_miu = $(".minus");
	let oTextNum = $("main tbody input[type=text]");
	let aDel = $("main tbody td>a:last-child");
	let aGoods = $("main tbody tr");
	let oTbody = $("main tbody");
	let aRadio = $(".option");	



	let cntPrice = $("main tbody td:nth-of-type(4)");//固定单价
	let dynPrice = $("main tbody td:nth-of-type(6)");//数量 * 单价


	Array.from(oTextNum).map(item=>item.num=1)

	for(let i = 0; i < oBtn_add.length;i++)
	{
		oBtn_add[i].onclick=function(){calNum(i,!0);}
		oBtn_miu[i].onclick=function(){calNum(i,!1);}
		aDel[i].onclick=function(){delGoods(i);}
	}

	function calNum(i,x)
	{
		let n = oTextNum[i].num;
		n = x?n+1:n-1;
		if(!n)delGoods(i);
		else
		{
			oTextNum[i].num=oTextNum[i].value=n;
			let v = Math.round(parseFloat(cntPrice[i].innerText)*n*100)/100
			dynPrice[i].innerText = v;
		}
	}


	function delGoods(i)
	{
		oTbody[0].removeChild(aGoods[i]);

		aRadio[i].x=0;
		updateSumPrice();
	}


}
