(function($){
	var fleg = false;
	$('.confirm_order_content_head ul li:nth-of-type(3)>span>span>span').on('click',function(){
		if(fleg){
			$(this).parents('.span').css({'right':'1.58rem'});
			fleg = false;
		}else{
			$(this).parents('.span').css({'right':'0'});
			fleg = true;
		}
	})
	
	//提交订单
	$('.confirm_order ul li:nth-of-type(2)').on('click',function(){
		$('.confirm_payment_bg').css({'display':'block'});
	})
	
	//关闭确认付款
	$('.confirm_payment>p:nth-of-type(1) span').on('click',function(){
		$('.confirm_payment_bg').css({'display':'none'});
	})
	
	//选择付款方式
	$('.confirm_payment ul>li input').on('click',function(){
		$('.confirm_payment ul>li input[type="radio"]').each(function(){
			$(this).parents('span').css({'backgroundPositionY':'0'});
		})
		$(this).parents('span').css({'backgroundPositionY':'-1.84rem'});
		
	})
	
	
})(jQuery)
