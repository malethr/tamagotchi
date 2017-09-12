$(document).ready(function() {
  $('#play-form').submit(function(event) {
    event.preventDefault();
    let toyPlay = $('#play').val();
    let jer = jerry;
    switch(toyPlay) {
      case "hs": jer.playHs("hs");
                      break;
      case "soccer": jer.playSoccer("soccer");
                      break;
      case "dice": jer.playDice("dice");
                     break;
    }
    // let fn = window[toyPlay];
    // if(typeof fn === "function") fn("game");
    let happy = jer.happyLevel;
    $('#game').text(happy);
  });
});
