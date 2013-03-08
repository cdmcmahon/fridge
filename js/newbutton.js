$(document).ready(function() {
	
	$("#newmag_button").click(function() {
		var newmag = document.createElement("div");
		var newtext = $("#newmag_title").val();
		$(newmag).addClass("magnet").draggable().text(newtext);

		document.body.appendChild(newmag);
	})
	

});