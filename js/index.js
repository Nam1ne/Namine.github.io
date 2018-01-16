(function($){
	
//	/*脚部菜单切换*/
//	$('.foot ul li').on('click',function(){
//		$('.foot ul li').removeClass('active');
//		$('.foot ul li span:nth-of-type(1)').css({'backgroundPositionY':'-2rem'});
//		$(this).children('span').eq(0).css({'backgroundPositionY':'0'});
//		$(this).addClass('active');
//	})
	/*
	 * wrap:表示轮播外层的盒子
	 * list:表示图片所在的ul
	 * lis:表示图片所在的li
	 * nav:表示下标小点点所在的ul
	 * ls:表示下标小点点所在的li
	 * width:表示轮播外层盒子的宽度
	 * 
	 */
	
	var wrap = document.getElementsByClassName('carousel')[0];
	var list = document.getElementsByClassName('carouselUl')[0];
	var nav  = document.getElementsByClassName('spot')[0];
	var ls = nav.getElementsByTagName('li');
	
	var width = wrap.offsetWidth;
	list.innerHTML += list.innerHTML;
	var lis = list.getElementsByTagName('li');
	var num = 0;
	var timer = null;
	
	//设置小点点的长度
	$('.spot').css({'width':ls.length*1.28 + 'rem'});
	
/*	for(var i=0;i<ls.length;i++){
		ls[i].index  =i;
		ls[i].onclick = function(){
			if(this.index > num){
				list.style.transition = "none";
				list.style.left = -(this.index - 1)*width + 'px';
				var that = this;
				setTimeout(function(){
					num = that.index;
					list.style.transition = ".5s";
					list.style.left = -num*width + 'px';
				},20);
			}
		}
	}*/

	//左划
	function fnLeft(){
		num++;
		if(num > lis.length/2){
			list.style.left = 0 +'px';                    // 瞬间拉回到原来位置
			list.style.transition = 'none';	              //改变transition值，位置变化时没有运动效果。
			num = 0;
			setTimeout(function(){                        // 延迟器，变到原位置后在进行下一步变化
				list.style.transition = "1s";
				num = 1;
				tab();
			},20);	
		}else{
			tab();	
		}
	}
	
	
	
	//右划
	function fnRight(){
		num--;
		if(num <0){
			num = lis.length/2+1;
			list.style.transition = "none";
			list.style.left = -lis.length/2*width +'px';
			setTimeout(function(){
				num = lis.length/2-1;
				list.style.transition = "1s";
				tab();
			},20)
		}else{
			tab();
		}
	}
	function tab(){
		for(var i=0;i<ls.length;i++){
				ls[i].className = '';
		}
		ls[num%ls.length].className ="actives";
		list.style.left = -num * width +'px';
	}
	function getCss(obj,attrs){
		if(obj.currentStyle == undefined){
			return parseInt(getComputedStyle(obj)[attrs]);
		}else{
			return parseInt(obj.currentStyle[attrs]);
		}	
	}
	
	
	var timer = null;
	timer = setInterval(function(){
		fnLeft();
	},3000)
	
	swipe(wrap,'left',fnLeft);
	swipe(wrap,'right',fnRight);
	
})(jQuery)
