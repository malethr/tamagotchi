import { jerry } from './../js/tamagotchi.js';

$(document).ready(function() {
  $('#eat-form').submit(function(event) {
    event.preventDefault();
    let toyFeed = $('#eat').val();
    let jer= jerry;
    // let fn = window[toyFeed];
    // if(typeof fn === "function") fn("dirt");
    switch(toyFeed) {
      case "milk": jer.eatMilk("milk");
                      break;
      case "crackers": jer.eatCrackers("crackers");
                      break;
      case "cheese": jer.eatCheese("cheese");
                     break;
    }
    let foodAmt = jer.foodLevel;
    $('#hunger').text(foodAmt);
  });
});
