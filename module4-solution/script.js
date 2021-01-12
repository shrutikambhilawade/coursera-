(function () {

var names = ["sammer", "sadhana", "revant", "deepika", "Harshvardhan", "harshika", "Richa", "Pritya", "Latika", "soham"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 's') {
    byeSpeaker(names[i]);
  } 
  else if ( firstLetter === 'h'){
    heySpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
