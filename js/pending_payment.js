(function($){
	$('.paymenting').on('click',function(){
		$('.confirm_payment_bg').css({'display':'block'});
	})
	
	//关闭确认付款
	$('.confirm_payment>p:nth-of-type(1) span').on('click',function(){
		$('.confirm_payment_bg').css({'display':'none'});
	})
	
	$('.confirm_payment ul>li input').on('click',function(){
		$('.confirm_payment ul>li input').each(function(){
			$(this).parents('span').css({'backgroundPositionY':'0'});
		})
		$(this).parents('span').css({'backgroundPositionY':'-1.84rem'});
		
	})
})(jQuery)
