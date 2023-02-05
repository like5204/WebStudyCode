window.onload = function() {
	// 导航按钮选中样式
	var navx = document.getElementsByClassName('navx');
	var box = document.getElementById('main');

	navx[0].style.backgroundColor = '#afafaf';
	var navs = function() {
		for (var i = 0; i < navx.length; i++) {
			navx[i].style.backgroundColor = "";
		}
		navx[index].style.backgroundColor = '#afafaf';
	}
	// both函数,用于两侧动画.
	var both = function(main, left, right) {
		var timer;
		main.onmousemove = function() {
			clearInterval(timer);
			timer = setInterval(function() {
				if (left.offsetLeft == 0) {
					clearInterval(timer);
					return;
				}
				left.style.left = left.offsetLeft + 2 + 'px';
				right.style.left = right.offsetLeft - 1.34 + 'px';
			}, 5)

		}
		main.onmouseout = function() {
			clearInterval(timer);
			timer = setInterval(function() {
				if (left.offsetLeft == -100) {
					clearInterval(timer);
					return;
				}
				left.style.left = left.offsetLeft - 2 + 'px';
				right.style.left = right.offsetLeft + 2 + 'px';
			}, 5)
		}
	}
	var index = 0;
	// 第一个侧面动画
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	both(box, left, right);
	// 第二个侧面动画
	var left2 = document.getElementById('left2');
	var right2 = document.getElementById('right2');
	var box2 = document.getElementById('twomain')
	both(box2, left2, right2);
	// 第三个侧面动画
	var left3 = document.getElementById('left3');
	var right3 = document.getElementById('right3');
	var box3 = document.getElementById('threemain');
	both(box3, left3, right3);
	// 第四个侧面动画
	var left4 = document.getElementById('left4');
	var right4 = document.getElementById('right4');
	var box4 = document.getElementById('fourmain')
	both(box4, left4, right4);
	// 第六个侧面动画
	var left6 = document.getElementById('left6');
	var right6 = document.getElementById('right6');
	var box6 = document.getElementById('sixmain')
	both(box6, left6, right6);
	// 轮播图函数,用于轮播图
	var lunbo = function(both, img) {
		var timer;
		both[1].onclick = function() {
			var count = 0;
			clearInterval(timer);
			if (index > 1) {
				timer = setInterval(function() {
					if (count == 2100) {
						clearInterval(timer);
						index = 0;
						navs();
						return;
					}
					img.style.left = img.offsetLeft + 25 + "px";
					count += 25;
				}, 1);

				return;
			}
			timer = setInterval(function() {
				if (count == 1050) {
					clearInterval(timer);
					return;
				}
				img.style.left = img.offsetLeft - 25 + "px";
				count += 25;
			}, 1);
			index++;
			navs();

		}
		both[0].onclick = function() {

			var count = 0;
			if (index < 1) {
				q = setInterval(function() {

					if (count == 2100) {
						clearInterval(q);
						index = 2;
						navs();
						return;
					}
					img.style.left = img.offsetLeft - 25 + "px";
					count += 25;
				}, 1);
				return;
			}
			timer = setInterval(function() {
				if (count == 1050) {
					clearInterval(timer);
					return;
				}
				img.style.left = img.offsetLeft + 25 + "px";
				count += 25;
			}, 1);
			index--;
			navs();
		}

	}
	// 第一个轮播图动画
	var both = document.getElementsByName("mainboth")
	var img = document.getElementById('lunbomain');
	lunbo(both, img);
	// 导航按钮
	var nav = document.getElementsByClassName('nav1');
	for (var i = 0; i < nav.length; i++) {
		nav[i].num = i;
		nav[i].onclick = function() {
			index = this.num;
			navs();
			if (this.num * -1050 > img.offsetLeft) {
				navqie(25, index * -1050)
			} else if (this.num * -1050 < img.offsetLeft) {
				navqie(-25, index * -1050)
			}
		}
	}
	var navqie = function(numx, num) {
		clearInterval(box);
		var box = setInterval(function() {
			if (img.offsetLeft == index * -1050) {
				clearInterval(box);
				return;
			}
			img.style.left = img.offsetLeft + numx + "px";
		}, 5)
	}
	// 去除广告
	var fixed = document.getElementById('fixed');
	var button = document.getElementById('button')
	button.onclick = function() {
		fixed.style.left = fixed.offsetLeft + 1000 + "px";
	}

}
