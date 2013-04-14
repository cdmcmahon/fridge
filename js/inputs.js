function colorWhite(t) {
	var x = document.getElementById(t);
	$(x).css('background-color', '#fff');
}

var mostRecentMagName = "";



$("#newmag_button").click(function() {

	var newmag = document.createElement("div");
	var newtext = $("#newmag_title").val();
	$(newmag).addClass("magnet").draggable().text(newtext).attr("id", newtext);
	mostRecentMagName = newtext;
	$(newmag).css("background-color", "#FF0000");
	$('#magnet_space').append(newmag);

	var t = setTimeout("colorWhite(mostRecentMagName)", 1000);


})

$("#clearmags_button").click(function() {
	$('#magnet_space').empty();


})

$("#delete_button").click(function() {
	var magtext = $("#newmag_title").val();
	var mag = document.getElementById(magtext);
	$(mag).remove();

})



$("#reset_button").click(function() {

	$('#magnet_space').empty();

	var wa2 = new Array("the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "for", "was",
	 "on",
	"are", "as", "with", "his", "they", "at", "be", "this", "from", "I", "have", "or", "by", "one", "had",
	"not", "but", "what", "all", "were", "when", "we", "there", "can", "an", "your", "which", "their", 
	"said", "if", "do", "will", "each", "about", "how", "up", "out", "them", "then", "she", "many", "some",
	 "so",
	"these", "would", "other", "into", "has", "more", "her", "two", "like", "him", "see", "time", "could", 
	"no", "make",
	"than", "first", "been", "its", "who", "now", "people", "my", "made", "over", "did", "down", "only",
	"way", "find", "use", "may", "water", "ing", "little", "very", "after", "words", "called",
	"just", "where", "most", "know", "get", "through", "back", "much", "go", "before", "good", "new", "used",
	"me", "man", "too", "any", "same", "right", "Mr.", "old", "number", "great", "small", "every",
	"years", "different", "away", "air", "line", "us", "end", "read", "never", "left", "might",
	"saw", "both", "something", "thought", "few", "always", "those", "show", "looked", "show", "large",
	"something", "large", "children", "feed", "without", "once", "animals", "life", "enough", "took",
	"head", "above", "kind", "almost", "live", "page", "got", "god", "need", "let", "hand", "high",
	"mother", "parts", "private", "country", "night", "beer", "following", "?", "being", "study",
	"eyes", "one", "white", "black", "people", "best", "others", "sure", "however", "it's", "its",
	"young", "sun", "thing", "s", "heard", "several", "change", "against", "top", "turned",
	"point", "city", "play", "toward", "five", "using", "himself", "usually");
	var i = 0
	while(i<wa2.length){
		var newmag = document.createElement("div");
		var newtext = wa2[i];
		$(newmag).addClass("magnet").draggable().text(newtext).attr("id", newtext);
		var y = (Math.random() * $(window).height()) - 30;
		if(y<0){
			y = 0;
		}

		var x = (Math.random() * $(window).width()) - 50;
		if(x<0){
			x = 0;
		}

		if((x>($(window).width() - 7800) || x<200) && y<60){
			x = (Math.random() * ($(window).width() - 920)) + 200;
			y = (Math.random() * $(window).height() - 60) + 60;
		}

		$(newmag).css({'top': y, 'left': x});
		$('#magnet_space').append(newmag);
		i++;
	}

})


$("#newmag_title").keyup(function(event){
    if(event.keyCode == 13){
        $("#newmag_button").click();
    }
});

