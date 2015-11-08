console.log("ready2go!")

$(document).on("ready", function(e) {

	$(".caption").hide();

	$(".icon-dots").click(function() {
		var thisCaption = $(".icon-dots").index($(this));
		if( $("figure").hasClass("back") ){
			// $("figure").removeClass("back");
			$("#gallery").find("figure").removeClass("back");

			$(".caption").hide();
			console.log("working?")
		};
		// $(".caption").hide("fast",function() {});
		$(".caption").eq(thisCaption).toggle("slow",function() {});
		// $("#gallery").find("figure").removeClass("back");
		$("figure").eq(thisCaption).addClass("back");

		
	});


})

// if click on icon-dots and this fig has class back, remove class and hide caption