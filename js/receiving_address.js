(function($){
	//选择默认地址
	$('.address_content input[type="radio"]').on('click',function(){
		$('.address_content ul>li input[type="radio"]').each(function(){
			$(this).parents('span').css({'backgroundPositionY':'0'});
			$(this).attr('fleg','0');
		})
		$(this).parents('span').css({'backgroundPositionY':'-1.84rem'});
		$(this).attr('fleg','1');
		
		alert($(this).attr('fleg'));
	})
	
	//划出删除
	var address = document.getElementsByClassName('address_content')[0];
	var addressList = address.getElementsByTagName('li');	
	for(var i = 0; i < addressList.length; i++){
		swipe(addressList[i],'left',fnLeft);
		swipe(addressList[i],'right',fnRight);
	}	
	function fnLeft(){
		$('.address_content li').each(function(){
			$(this).css({'marginLeft':'0.96rem'});
		})
		$(this).css({'marginLeft':'-6.3rem'});
	}	
	function fnRight(){
		$(this).css({'marginLeft':'0.96rem'});
	}
	
	
	//点击删除地址
	$('.del').on('click',function(){
		$(this).parents('li').remove();
	})
	
})(jQuery)
