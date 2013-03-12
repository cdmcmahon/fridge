$(document).ready(function() {
	var saved = localStorage.getItem("savedMagnets");
	if(saved == null){
		
		var wa2 = new Array("the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "for", "was", "on",
			"are", "as", "with", "his", "they", "at", "be", "this", "from", "I", "have", "or", "by", "one", "had",
			"not", "but", "what", "all", "were", "when", "we", "there", "can", "an", "your", "which", "their", 
			"said", "if", "do", "will", "each", "about", "how", "up", "out", "them", "then", "she", "many", "some", "so",
			"these", "would", "other", "into", "has", "more", "her", "two", "like", "him", "see", "time", "could", "no", "make",
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
			var mag_space = document.getElementById('magnet_space');
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

			if(x>750 && y<50){
				x = x - (Math.random() * 750);
				y = y + (Math.random() * ($(window).height() - 50));
			}

			$(newmag).css({'top': y, 'left': x});



			mag_space.appendChild(newmag);
			i++;
		}
	}
	else {
		var mag_array = saved.slice();
		$(mag_array).each(function() {
			decodeURIcomponent($(this));
		})
		for(i=0; i<mag_array.length; i=i+3){
			var mag_space = document.getElementById('magnet_space');
			var newmag = document.createElement("div");
			var newtext = $(mag_array).eq(i);
			var newleft = $(mag_array).eq(i+1);
			var newtop = $(mag_array).eq(i+2);
			$(newmag).addClass("magnet").draggable().text(newtext).attr({id: newtext, left: newleft, top: newtop});

			mag_space.appendChild(newmag);
		}

	}

});