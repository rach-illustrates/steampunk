$(document).ready(function(){
	var images = getParams()

	for(var key in images) {
		$(key).attr("style","background-image:url('img/thanks/" + images[key] + "')")
	}

	$(".form-item").keyup(function(){
		var inputs = $(".form-item")
		var formData = ""
		for(var x = 0; x < inputs.length; x++) {
			if(inputs[x].value === "") {
				$("#submit .img-responsive").addClass("disabled")
				return
			}
		}
		$("#submit .img-responsive").removeClass("disabled")
	})

	$("#submit").click(function(){
		if($(this).hasClass("disabled"))
			return

		$.post("http://rach-illustrates.com/post.php",$("#form").serialize() + "&images=" + window.location.search.substring(1))

		$("#submit .img-responsive").addClass("disabled")
		$("#form").html("<h1>Thanks for your feedback!</h1>")
	})
})

function getParams() {
	var sPageURL = window.location.search.substring(1).replace(/%23/g,"#");
	var sURLVariables = sPageURL.split('&');
	var images = {}
	for (var i = 0; i < sURLVariables.length; i++)
	{
	    var sParameterName = sURLVariables[i].split('=');
	    images[sParameterName[0]] = sParameterName[1]
	}
	return images
}