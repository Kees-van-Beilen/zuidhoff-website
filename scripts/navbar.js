//
// Fancy page script
//

$(document).ready(()=>{

	let banner = $(".title-bar");
	let text   = $(".title-bar h1");
	var speed  = 0;
	let height = $(window).height();
	setTitleBar();

	speed = 200;
	$(document.body).scroll(setTitleBar);


	function setTitleBar(){
		let h = height/2;
		let v = $(document.body).scrollTop();
		var b = h-v;
		if(b<100){
			b=100;
			$(".desktopButtons").fadeIn(speed);
			$("#firstPageNav").fadeOut(speed);

		}else if(v<1){
			$("#firstPageNav").fadeIn(speed);
			$(".desktopButtons").fadeOut(speed);
		}else{
			$("#firstPageNav").fadeOut(speed);
			$(".desktopButtons").fadeOut(speed);
		}
		banner.height(b);
		text.css("font-size",b/3);
	}
})