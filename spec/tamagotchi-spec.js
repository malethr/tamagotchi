import { jerry } from './../js/tamagotchi.js';

describe('tamagotchi', function(){
  let jer = jerry;

  beforeEach(function() {
    jasmine.clock().install();
    jer.foodLevel = 10;
    jer.happyLevel = 10;
    jer.sleepLevel = 10;
    jer.name = "Jerry";
    jer.setHunger();
    jer.setHappy();
    jer.setSleep();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function(){
    expect(jer.name).toEqual("Jerry");
    expect(jer.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function(){
    jasmine.clock().tick(3001);
    expect(jer.foodLevel).toEqual(7);
  });

});
