//
// Live demo script
//

$(document).ready(()=>{
	let vragen = $(".vragen");

	var vragenIndex = 0;

	console.log(vragen.length);

	vragen.fadeOut(0);

	$(vragen[0]).fadeIn(1000);

	$("#antw").fadeIn(0)
	$("#volgende").fadeOut(0)

	$("#volgende").click(()=>{
		$(vragen[vragenIndex]).fadeOut(100,()=>{
			vragenIndex+=1;
			if(vragenIndex==vragen.length)vragenIndex=0;
			$('[done="true"]').attr("done","false");
			$(vragen[vragenIndex]).fadeIn(100);
		});
		$("#antw").fadeIn(0)
		$("#volgende").fadeOut(0)
	})

	$("#antw").click(()=>{
		$('[done="false"]').attr("done","true");
		$("#antw").fadeOut(0)
		$("#volgende").fadeIn(0)
	})
});