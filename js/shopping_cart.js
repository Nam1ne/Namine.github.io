(function($){
	var shoppingCartContent = document.getElementsByClassName('shopping_cart_content')[0];
	var list = shoppingCartContent.getElementsByTagName('li');
	
	for(var i = 0; i < list.length; i++){
		swipe(list[i],'left',fnLeft);
		swipe(list[i],'right',fnRight);
	}
	function fnLeft(){
		$(this).css({'left':'-7.2rem'}).siblings().css({'left':'0'});
	}
	function fnRight(){
		$(this).css({'left':'0'});
	}
	
	//数量增加
	$('.shopping_cart_content ul li .add_num').on('click',function(){
		number = $(this).siblings('.number').text();
		number++;
		if(number > 1){
			$(this).siblings('.reduce_num').css({'background':'#9bdadf'});
		}
		$(this).siblings('.number').text(number);
	})
	//数量减少
	$('.shopping_cart_content ul li .reduce_num').on('click',function(){
		number = $(this).siblings('.number').text();
		number--;
		if(number <= 1){
			number = 1;
			$(this).css({'background':'#c8eeef'});
		}
		
		
		$(this).siblings('.number').text(number);
	})
	
	
	//删除
	$('.shopping_cart_content ul li .del').on('click',function(){
		$(this).parents('li').remove();
	})
	
	
	//全选
	$('.settlement input').on('click',function(){
		if($(this).is(':checked')){
			$(this).attr('checked','true');
			$(this).parents('span').css({'backgroundPositionY':'-1.84rem'});
			$('.shopping_cart_content ul li input').each(function(){
				$(this).attr('checked','true');
				$(this).parents('span').css({'backgroundPositionY':'-1.84rem'});
			})
		}else{
			$(this).removeAttr('checked');
			$(this).parents('span').css({'backgroundPositionY':'0'});
			$('.shopping_cart_content ul li input').each(function(){
				$(this).removeAttr('checked');
				$(this).parents('span').css({'backgroundPositionY':'0'});
			})
		}
	})
	//单选
	$('.shopping_cart_content ul li input').on('click',function(){
		var num = 0;
		if($(this).is(':checked')){
			$(this).attr('checked','true');
			$(this).parents('span').css({'backgroundPositionY':'-1.84rem'});
		}else{
			$(this).removeAttr('checked');
			$(this).parents('span').css({'backgroundPositionY':'0'});
		}
		
		$('.shopping_cart_content ul li input').each(function(){
			if($(this).is(':checked')){
				num++;
			}
		})
		if(num == $('.shopping_cart_content ul li input').length){
			$('.settlement input').attr('checked','true');
			$('.settlement input').parents('span').css({'backgroundPositionY':'-1.84rem'});
		}else{
			$('.settlement input').removeAttr('checked');
			$('.settlement input').parents('span').css({'backgroundPositionY':'0'});
		}
	})
	
	//身份认证
	$('.settlement>span:nth-of-type(3)').on('click',function(){
		$('.identity_authentication_bg').css({'display':'block'});
	})
	
	//关闭身份认证
	$('.identity_authentication>p:nth-of-type(1) span').on('click',function(){
		$('.identity_authentication_bg').css({'display':'none'});
	})
	
})(jQuery)
