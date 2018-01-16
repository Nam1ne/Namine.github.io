
(function(){
	//认证
	checkPhone();
	function checkPhone(){ 
		//手机号码认证
	    var phone = document.getElementById('phone');
	    var pass = document.getElementById('password');
	    var login = document.getElementById('login');
	    phone.onblur = function(){
		    if(!(phone.value)){
		    	$(this).siblings('label').css({'backgroundPosition':'-0.1rem -0.1rem'});
		    }
		    if(!(/^1[34578]\d{9}$/.test(phone.value))){ 
		        $(this).siblings('span').css({'display':'block'});
		        return false;
		    }
	    }
	    
	    phone.onfocus = function(){
	    	log();
	    	$(this).siblings('label').css({'backgroundPosition':'-0.1rem -2.1rem'});
	    	$(this).siblings('span').css({'display':'none'});
	    }
	    
	    pass.onblur = function(){
		    if(!(pass.value)){
		    	$(this).siblings('label').css({'backgroundPosition':'-2.24rem -0.1rem'});
		    }
	    }
	    
	    pass.onfocus = function(){
	    	log();
	    	$(this).siblings('label').css({'backgroundPosition':'-2.24rem -2.1rem'});
	    }
	    function log(){
//	    	if(!(phone.value && pass.value)){
//		    	$('#login').attr('disabled','disabled');
//		    	$('#login').css({'color':'#b8b6c1'});
//		    	return false;
//		    }else{
		    	$('#login').removeAttr('disabled');
		    	$('#login').css({'color':'#eaecf3'});
//		    }
	    }
	}
	
})(jQuery)
