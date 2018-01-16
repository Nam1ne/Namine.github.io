(function($){
	//认证
	checkPhone();
	function checkPhone(){ 
		//手机号码认证
	    var phone = document.getElementById('phone');
	    var authentication = document.getElementById('authentication');
	    var getCode = document.getElementById('getCode');
	    var pass = document.getElementById('password');
	    var register = document.getElementById('register');
	    //手机号码
	    phone.onblur = function(){
//	    	log();
		    if(!(phone.value)){
		    	$(this).siblings('label').css({'backgroundPosition':'-0.1rem -0.1rem'});
		    }
		    if(!(/^1[34578]\d{9}$/.test(phone.value))){ 
		        $(this).siblings('span').css({'display':'block'});
		        return false;
		    }
	    }
	    phone.onfocus = function(){
	    	$(this).siblings('label').css({'backgroundPosition':'-0.1rem -2.4rem'});
	    	$(this).siblings('span').css({'display':'none'});
	    }
	    //验证码
	    authentication.onblur = function(){
		    if(!(authentication.value)){
		    	$(this).siblings('label').css({'backgroundPosition':'-2.24rem -0.1rem'});
		    }
//		    log();
	    }
	    authentication.onfocus = function(){
	    	$(this).siblings('label').css({'backgroundPosition':'-2.24rem -2.4rem'});
	    }
	    
	    //获取验证码
    	var timer = null;
	    getCode.addEventListener('click',function(){
	    	var num = 60;
	    	$(this).attr({'disabled':'disabled'});
	    	getCode.value = num + 's';
	    	clearInterval(timer);
			timer = setInterval(function(){
				num--;
				if(num == 0){
					getCode.value = '获取认证码';
					$('#getCode').removeAttr('disabled');
					clearInterval(timer);
				}else{
					getCode.value = num + 's';
				}
			},1000)
	    })
	    
	    //密码
	    pass.onblur = function(){
		    if(!(pass.value)){
		    	$(this).siblings('label').css({'backgroundPosition':'-4.4rem -0.1rem'});
		    }
//		    log();
	    }
	    pass.onfocus = function(){
	    	$(this).siblings('label').css({'backgroundPosition':'-4.4rem -2.4rem'});
	    }
	    window.document.onclick = function(){
	    	log()
	    }
	    function log(){
	    	if(!(phone.value && pass.value && authentication.value)){
		    	$('#register').attr('disabled','disabled');
		    	$('#register').css({'color':'#b8b6c1'});
		    	return false;
		    }else{
		    	$('#register').removeAttr('disabled');
		    	$('#register').css({'color':'#eaecf3'});
		    }
	    }
	}
})(jQuery)
