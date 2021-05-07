//
// quotes.js
//
$(document).ready(()=>{

	let a = $(".qoutes > h1");
	let quotes = JSON.parse(a.attr('data'));
	console.log(quotes)
	var qi = 0;

	a.fadeOut(0,routine);
	function routine(){

		a.text(quotes[qi]);
		qi+=1;
		if(qi===quotes.length)qi=0;
		a.fadeIn(100,()=>{
			a.delay(8000).fadeOut(100,routine);
		})
	}
});