

function move(oUl, pages, t)
{
	//抽象轮播函数
	//oUl 需要移动的元素
	//pages 该轮播所有的页数
	//t 轮播自动切换时长

	let current = 0;//标记当前展示的页面
	const oLi_w = parseInt(getStyle(oUl.querySelector("*"),'width'));

	let oBtn_l = oUl.parentElement.querySelector("div.mlist-marker-left > a");

	let oBtn_r = oUl.parentElement.querySelector("div.mlist-marker-right > a");

	let aSwitch = Array.from(oUl.parentElement.parentElement.querySelectorAll("div.mode_slide_switch > a"));

	let aMark = Array.from(oUl.parentElement.querySelectorAll("div.marker"));
	

	oBtn_l.onclick=function()
	{
		//向右按钮
		current--;
		if(current < 0)current=pages-1;

		updateUl();
	}
	oBtn_r.onclick=function()
	{
		current++;
		if(current > pages-1)current=0;

		updateUl();
	}

	let timer = setInterval(oBtn_r.onclick,t);//开启定时器

	aSwitch.map((item,i)=>item.v=i);//给每个小圆点加一个值标记
	aSwitch.map(item=>item.onclick=function(){current = this.v;updateUl();});
	//设置点击底部小圆点，进行跳转

	function updateUl()
	{
		//统一设置ul的left
		let target = -(current) * oLi_w;
		aSwitch.map(item=>item.classList.remove("active"));
		aSwitch[current].classList.add("active");
		MyStartMove(oUl,'left', target);
	}

	aMark.map(item=>item.onmouseover=()=>clearInterval(timer));	
	aMark.map(item=>item.onmouseout=()=>timer = setInterval(oBtn_r.onclick,t));

}

function start_move()
{
	let oUl_re = document.querySelector("body > main > div.mlist-recomm > div.mlist-move > ul");

	let oUl_side = document.querySelector("body > main > div.mod_index--song > div.mod_index-song-content > div.side_list");

	let oUl_slide = document.querySelector("body > main > div.mod_slide_box > div.slide-box-section > div.slide-box-move");


	move(oUl_re, 5, 6000);

	move(oUl_side, 3, 5000);

	move(oUl_slide, 5, 6000);


}
function click_addActive(aLi)
{
	
	aLi = Array.from(aLi);

	aLi.map(item=>item.onclick=()=>
	{
		aLi.map(item=>item.classList.remove("active"));
		item.classList.add("active")
	});
}

function click_tag()
{

		let head_aLi = document.querySelectorAll("header>ul>li");
		let tag_uls = Array.from(document.querySelectorAll(".mlist-text-tag"));
		
		click_addActive(head_aLi);

		tag_uls.map(item=>click_addActive(item.querySelectorAll("li")));
}
function musicPlay()
{

	let song_lis = document.querySelectorAll("body > main > div.mod_slide_top > div > ul > li:nth-child(1) > div.toplist-bottom > ul > li");
	let myAuto = document.getElementById("myaudio");
	song_lis[0].onclick=()=>
	{
		myAuto.pause();
		myAuto.src = "mp3/cjy_lg.mp3";
		myAuto.play();
	}
	song_lis[1].onclick=()=>
	{
		myAuto.pause();
		myAuto.src = "mp3/gem_lt.mp3";
		myAuto.play();
	}
}




