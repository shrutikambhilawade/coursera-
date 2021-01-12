(function(window) {
	var speakWord = "Hey";
	var heySpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.heySpeaker = heySpeaker;

})(window);
