$(document).ready(function() {
	var saved = localStorage.getItem("savedMagnets");
	console.log(saved);

	if(saved == null){
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

			var y = (Math.random() * $(window).height())-50;
			if(y<0){
				y = 0;
			}
			var x = (Math.random() * $(window).width())-50;
			if(x<0){
				x = 0;
			}
			if(x>($(window).width() - 600) && y<50){
				x = x - (Math.random() * 750);
				y = y + 50;
			}

			$(newmag).css({'top': y, 'left': x});
			$('#magnet_space').append(newmag);
			i++;
		}
	}
	else {
		var saved_array = saved.split(',');
		for(var i = 0; i < saved_array.length; i = (i+3)){
			console.log(saved_array);
			var newmag = document.createElement("div");
			var newtext = saved_array[i];
			var newleft = saved_array[(i+1)];
			var newtop = saved_array[(i+2)];
			$(newmag).addClass("magnet").draggable().text(newtext);
			$(newmag).attr("id", newtext);
			$(newmag).css({'left': newleft, 'top': newtop});
			$('#magnet_space').append(newmag);
		}
	}

});



$(window).unload(function() {
		var mem_array = new Array;
	
		$('#magnet_space').children().each(function() {
			console.log($(this));
			var offset = $(this).offset();
			mem_array.push($(this).attr('id'));
			mem_array.push(offset.left);
			mem_array.push(offset.top);
		});
		console.log(mem_array);

		localStorage.setItem("savedMagnets", mem_array);

})




