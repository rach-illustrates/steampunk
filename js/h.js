/* Hoverboard JS */
$(document).ready(function(){
	var imgRoot = "img/board/"
	var images = {
		"#chassis": {
			current: -1,
			images: ["Chasis_1.png", "Chasis_2.png", "Chasis_3.png"]
		},
			"#propeller": {
			current: -1,
			images: ["Propellers_1.png", "Propellers_2.png", "Propellers_3.png"]
		},
			"#turbine": {
			current: -1,
			images: ["Turbine_1.png", "Turbine_2.png", "Turbine_3.png"]
		},
			"#gauge": {
			current: -1,
			images: ["Pressure_gauge_1.png", "Pressure_gauge_2.png", "Pressure_gauge_3.png"]
		},
			"#wings": {
			current: -1,
			images: ["Wings_1.png", "Wings_2.png", "Wings_3.png"]
		},
			"#footholds": {
			current: -1,
			images: ["Footholds_1.png", "Footholds_2.png", "Footholds_3.png"]
		}
	}

	var noOfImages = 6;
	function checkSubmitOk(imgObj) {
		if(imgObj.current === -1)
			noOfImages--;

		if(noOfImages === 0)
			$("#submit .disabled").removeClass("disabled")
	}

	$(".button").on("click",function(e){
		var target = $(this).data("target")
		$("#placeholder").removeClass("show")

		var imgObj = images[target]
		checkSubmitOk(imgObj)

		imgObj.current++

		if(imgObj.current === imgObj.images.length)
			imgObj.current = 0

		var imgPath = imgRoot + imgObj.images[imgObj.current]
		$(target).attr("style","background-image: url('" + imgPath +"')")
	})

	$(".button").hover(function(){
		var imgUrl = "img/board/" + $(this).data("hover") + "_button_hover_state.png"
		$("#hover-state").attr("style","background-image:url('" + imgUrl + "')")
	}, function(){
		$("#hover-state").attr("style","background-image:none")
	})

	$("#submit").click(function(){
		if($("#submit img.disabled").length !== 0)
			return
		
		var getData = GetURLParameter("%23outfit")
		var data = "?%23outfit=" + getData

		for(var key in images) {
			data += "&" + key + "=" + images[key].images[images[key].current]
		}
		data = data.replace(/#/g,"%23")
		var pagePath = window.location.pathname.split("/")
		pagePath.pop()
		pagePath = pagePath.join("/")
		var newURL = window.location.protocol + "//" + window.location.host + pagePath
		window.location.href = newURL + "/thankyou.html" + data
	})

	resizeDivs()
	$(window).resize(resizeDivs)
})

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

function resizeDivs () {
	var ww = window.innerWidth;
	var wh = window.innerHeight;

	if(ww/wh <= 1500/1800) {
		$("#chassis-btn").attr("style","")
		$("#propeller-btn").attr("style","")
		$("#turbine-btn").attr("style","")
		$("#gauge-btn").attr("style","")
		$("#wings-btn").attr("style","")
		$("#footholds-btn").attr("style","")

		return
	}

	var midWidth = 250 * wh/ww

	var leftStyle = "right:50%;margin-right:"+midWidth/2+"px;"
	var midStyle = "left:0;right:0;margin:0 auto;width:" + midWidth + "px;"
	var rightStyle = "left:50%;margin-left:"+midWidth/2+"px;"

	$("#chassis-btn").attr("style",leftStyle)
	$("#propeller-btn").attr("style",midStyle)
	$("#turbine-btn").attr("style",rightStyle)
	$("#gauge-btn").attr("style",leftStyle)
	$("#wings-btn").attr("style",midStyle)
	$("#footholds-btn").attr("style",rightStyle)
}