$(".button").on("click" , function(){
	alert("We are not currently taking sign ups");
	$('.button').html("No Sign Ups!");
});


$(document).click(function(){
	if ( $(".more").is(":hidden")) {
		$(".more").slideDown("slow");
		$('.readmore').html("Read Less")
	} else {
		$(".more").hide();
		$('.readmore').html("Read More")
	}
	});

$(document).click(function(){
	if ( $(".more2").is(":hidden")) {
		$(".more2").slideDown("slow");
		$('.learnmore').html("Learn Less")
	} else {
		$(".more2").hide();
		$('.learnmore').html("Learn More")
	}
	});
