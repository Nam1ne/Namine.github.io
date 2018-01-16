/*手机适配设置*/
		var meta = document.createElement('meta');
		meta.name = 'viewport';
		var i = window.devicePixelRatio>1?1/window.devicePixelRatio:1;
		meta.content = 'width=device-width,user-scalable=no,initial-scale='+i+',maximum-scale='+i+',minimum-scale='+i;
		document.head.appendChild(meta);
		
		var html = document.getElementsByTagName('html')[0];
		var iw = window.innerWidth;
		console.log(iw);
		var i = iw/30;
		/*i表示一个rem表示的像素数,这里是1rem=25px,总宽度为30rem*/
		
		html.style.fontSize = i + 'px';
		
		
		
		var height = document.documentElement.clientHeight;
		console.log(height);



	

