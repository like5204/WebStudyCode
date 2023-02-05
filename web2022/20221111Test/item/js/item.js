
let starUrl, fillStarUrl;
function initStar()
{
	//与星星点亮相关，初始化星星背景图片的两个地址（“star.png","star-fill.png")
	fillStarUrl = $($(".editComment>div>.stars>li")[0]).css("backgroundImage");
	starUrl = fillStarUrl.replace("star-fill","star");

	$(".editComment>div>.stars")[0].setAttribute("s",0);
}




function unfoldList()
{
	//用于实现列表的展开与收缩
	let btns = $(".bts>ul>li>a");
	let oUl = $(".bts>ul>li>ul");
	Array(btns).map(item=>item.x=!1);
	for(let i = 0; i < btns.length; i++)
	{
		$(btns[i]).click(function()
		{


			for(let j = 0; j < btns.length; j++)
			{
				if(btns[j].x && j != i)btns[j].click();
			}
			if(!this.x)
			{
				$(this).addClass("active");
				$(oUl[i]).show();
			}
			else
			{
				$(this).removeClass("active");
				$(oUl[i]).hide();
			}
			this.x=!this.x;
		})
	}
}

function moveSmallImg()
{
	//用于鼠标移入小图片，更换大图片的地址
	let disImg = $("#small");
	let aSmallImg = $(".pics>ul>li");
	let img_box = $("#imgBox img");

	for(let i = 0; i < aSmallImg.length; i++)
	{
		$(aSmallImg[i]).mouseenter(function()
		{
			let currSrc = $(this).css("backgroundImage");

			disImg.css("backgroundImage",currSrc);
			img_box[0].src=currSrc.split("\"")[1];//改变大图时，放大镜的预览大图随之改变


		});
	}
}




function enlargeImg()
{
	let mg_small = $("#small");
	let moveBox = $("#sliper");

	let mg_imb = $("#imgBox");
	let mg_im = $("#imgBox img");

	let isEnter=false;
	mg_small.on("mouseover",function(){mg_imb.show();moveBox.show();isEnter=!0;});

	mg_small.on("mouseout",function(){mg_imb.hide();moveBox.hide();isEnter=!1;});


	document.onmousemove=function(e)
	{
		let ev = e||winodw.event;

		if(!isEnter)return;
		
		
		let x = (ev.pageX - moveBox.width()*1.1);
		let y = (ev.pageY - moveBox.height()*1.5);

		
		let maxX = mg_small.width() - moveBox.width();
		let maxY = mg_small.height() - moveBox.height();
		

		x = x < 0?0:x;
		y = y < 0?0:y;

		x = x > maxX?maxX:x;
		y = y > maxY?maxY:y;
		


		moveBox.css("left",x+"px").css("top",y+"px");
		

		let imgWidth = mg_imb.width() - mg_im.width();
		let imgHeight = mg_imb.height()-mg_im.height();

		let imgLeft = x * imgWidth / maxX;
		let imgTop = y * imgHeight / maxY;

		mg_im.css({
			"left":`${imgLeft}px`,
			"top":`${imgTop}px`
		});


	}
	
}

function updateNum()
{
	let bts_num = $(".purNum button");

	let ov_num = $(".purNum i");

	const maxNum = 11;
	let vNum = 10;
	let currNum = 1;
	writeNum(maxNum);
	function writeNum(i){ov_num.text("(当前库存"+i+")");$(bts_num[1]).text(currNum);}

	$(bts_num[0]).on('click',minusNum);
	$(bts_num[2]).on('click',addNum);


	function addNum()
	{
		currNum++;
		if(currNum > maxNum)
		{
			alert("超出购买数量");
			currNum--;
		}
		writeNum(maxNum-currNum);
	}

	function minusNum()
	{
		currNum--;
		if(currNum <=  0)
		{
			alert("购买数量不能小于1哦");
			currNum = 1;
		}
		writeNum(maxNum-currNum);
	}

}



function move3Img()
{
	let oUl = $("#moveBox ul");
	let aBtns_move = $("#moveBox + p > a");

	let currImg = 1;//定义当前图片索引

	let li_h = $($("#moveBox ul li")[0]).height();

	function setOul(){oUl.css("top",-li_h*currImg);}

	setOul();
	
	$(aBtns_move[0]).on('click',a)
	$(aBtns_move[1]).on('click',b)

	function a()
	{
		currImg++;
		if(currImg >= 3)
		currImg = 0;

		setOul();
	}
	function b()
	{
		currImg--;
		if(currImg < 0)
		currImg = 2;

		setOul();
	}		

}

function changeItem()
{
	//商品评论和详情栏目的切换
	let opt_items = $(".opt >div");
	let opt_cnts = $(".opt-content > div");
	
	let currItem = 0;

	for(let i = 0; i < opt_items.length;i++)
	{
		$(opt_items[i]).on('click',function()
		{
			if(i == currItem)return;

			opt_items[i].classList.add("active");
			$(opt_cnts[i]).css("display","block");


			opt_items[currItem].classList.remove("active");
			$(opt_cnts[currItem]).css("display","none");


			currItem = i;



		});
	}
	
}

function drawStar()
{
	//实现发送评论处的星星点击;
	let a_stars = $(".editComment>div>.stars>li");
	
	for(let i = 0; i < a_stars.length; i++)
	{
		a_stars[i].onclick=function()
		{
			let stars = $(".editComment>div>.stars");
			let sNum = parseInt(stars[0].getAttribute("s"));
			if(sNum == i)return;

			$(".editComment>div>.stars")[0].setAttribute("s",i);
			if(sNum < i)
			{
				for(let j = sNum; j <= i; j++)
					$(a_stars[j]).css("backgroundImage",fillStarUrl);
			}
			else if(sNum > i)
			{
				for(let j = sNum; j > i; j--)
				$(a_stars[j]).css("backgroundImage",starUrl);
			}

		}

	}


}




function createComment(stars, comm, targetObj)
{
	let s = "<ul class='stars'>";
	
	s += createLi(stars);

	s += "</ul>";

	s += `<p>${comm}</p>`;

	s += `<p>----匿名</p>`;

	s += "<button>删除</button>";
	
	let oLi = document.createElement("li");
	oLi.innerHTML = s;
	
	targetObj.append(oLi);
	
	let oBtn = oLi.getElementsByTagName("button")[0];
	
	oBtn.onclick=function()
	{
		oLi.parentElement.removeChild(oLi);
	}
}

function createLi(num)
{
	let s = "";
	num = parseInt(num);
	for(let i = 0; i <= num; i++)
	{
		s += "<li style=\"background-image:url('img\/star-fill.png')\"></li>";
	}
	
	let a = 5 - num - 1;

	for(let i = 0; i < a; i++)
	{
		s+= `<li></li>`;
	}
	
	return s;

}
function emitCmt()
{
	let emit_cmt = $(".editComment button");

	let oUl_cmts = $(".comments>ul");

	let astars = $(".editComment .stars");

	let oText = $(".editComment textarea");
	emit_cmt.on('click',function()
	{
		starNum = astars[0].getAttribute("s");
		
		user_comment = oText.val();
		
		createComment(starNum,user_comment,oUl_cmts);

		oText.val("");	
		$(".editComment>div>.stars>li")[0].onclick();
	}) 

}



function initComment()
{
	const data_cmt = [["2","有一说一，款式真的是非常喜欢呀，不过买回来到现在还没有试，反正看着就很中意，冲就完事啦"],["1","质量很差，不建议大家购买!"]];
	

data_cmt.map(item=>createComment(item[0],item[1],$(".comments>ul")));

}
