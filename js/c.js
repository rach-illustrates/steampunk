$(document).ready(function(){

	//Visually reflect prevent of submit of unclothed character
	$('#choose-outfit').on('slid.bs.carousel', function () {
		if($(this).find(".active").hasClass("none"))
			$("#submit img").addClass("disabled")
		else
			$("#submit img").removeClass("disabled")
	})

	$("#submit").click(function(e){
		e.preventDefault()
		e.stopPropagation()

		//Actually prevent submit of unclothed character
		if($(this).find(".disabled").length > 0)
			return

		$slide = $('#choose-outfit .active')
		if($slide.data("action") === "submit") {
			//Submit on successful attempt
			var query = "?%23outfit=Final_page_" + $slide.data("image") + ".png"

			//Build page path
			var pagePath = window.location.pathname.split("/")
			pagePath.pop()
			pagePath = pagePath.join("/")
			var newURL = window.location.protocol + "//" + window.location.host + pagePath

			//Redirect with query string
			window.location.href = newURL + "/hoverboard.html" + query
		}
		else {
			//Show popup with fail message
			var $popup = $($slide.data("popup"))
			$("#popup").addClass("show")
			$popup.removeClass("hidden")
			$popup.addClass("active")
		}

		$("#popup-hover").click(function(){
			$("#popup").removeClass("show")
			$("#popup .active").addClass("hidden").removeClass("active")
		})
	})	
})