(function($){
	$('.classifition_content_top ul li').on('click',function(){//touchstart
		$(this).addClass('classifition_top_active').siblings().removeClass('classifition_top_active');
		$('.list>div').eq($(this).index()).css({'display':'block'}).siblings().css({'display':'none'});
	
	});
	
	$('.classifition_content_left ul li').on('click',function(){
		$(this).addClass('classifition_left_active').siblings().removeClass('classifition_left_active');
		$('.classifition_content_right .right_list').eq($(this).index()).css({'display':'block'}).siblings().css({'display':'none'});
	})
	
	
	
	
//	function changeTo(){
//		$(this).addClass('classifition_top_active').siblings().removeClass('classifition_top_active');
//		$('.list div').eq($(this).index()).css({'display':'block'}).siblings().css({'display':'none'});
//	}
})(jQuery)
