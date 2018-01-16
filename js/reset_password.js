(function($){
	//认证
	checkPhone();
	function checkPhone(){ 
		//手机号码认证
	    var pass = document.getElementById('password');
	    var finish = document.getElementById('finish');
	    
	    //密码
	    pass.onblur = function(){
		    if(!(pass.value)){
		    	$(this).siblings('label').css({'backgroundPosition':'-2.24rem -2.1rem'});
		    }
		    log();
	    }
	    pass.onfocus = function(){
	    	$(this).siblings('label').css({'backgroundPosition':'-2.24rem -0.1rem'});
	    }
	    window.document.onclick = function(){
	    	log()
	    }
	    function log(){
	    	if(!(pass.value)){
		    	$('#finish').attr('disabled','disabled');
		    	$('#finish').css({'color':'#b8b6c1'});
		    	return false;
		    }else{
		    	$('#finish').removeAttr('disabled');
		    	$('#finish').css({'color':'#eaecf3'});
		    }
	    }
	}
})(jQuery)
