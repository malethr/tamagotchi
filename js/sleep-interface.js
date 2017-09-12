$(document).ready(function() {
  $('#sleep-form').submit(function(event) {
    event.preventDefault();
    let toySleep = $('#sleep').val();
    let jer = jerry;
    switch(toySleep) {
      case "nap": jer.sleepNap("nap");
                      break;
      case "half": jer.sleepHalf("half");
                      break;
      case "long": jer.sleepLong("long");
                     break;
    }
    // let fn = window[toyPlay];
    // if(typeof fn === "function") fn("game");
    let sleep = jer.sleepLevel;
    $('#sleepm').text(sleep);
  });
});
