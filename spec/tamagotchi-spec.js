import { jerry } from './../js/tamagotchi.js';

describe('tamagotchi', function(){
  let jer = jerry;

  beforeEach(function() {
    jasmine.clock().install();
    jer.foodLevel = 10;
    jer.happyLevel = 20;
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

  it('should get very hungry if the food leve drops below zero', function(){
    jer.foodLevel=0;
    expect(jer.didYouGetHungry()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function(){
    jasmine.clock().tick(10001);
    expect(jer.didYouGetHungry()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(jer.didYouGetHungry()).toEqual(true);
  });

  it('should not be able to feed tamatoy if you got Hungry', function() {
    jer.foodLevel = -1;
    expect(jer.feed(5)).toEqual("Sorry jerry is starving!");
  });

  it('should return that the jerry ate milk and the food level should go up 3', function() {
    expect(jer.eatMilk("milk")).toEqual("Jerry ate the milk! Food level goes up 3!");
    expect(jer.foodLevel).toEqual(13);
  });

  it('should have a name and a happiness level of 20 when it is created', function() {
    expect(jer.name).toEqual("Jerry");
    expect(jer.happyLevel).toEqual(20);
  });

  it('should get very sad after 20 seconds without play', function() {
    jasmine.clock().tick(20001);
    expect(jer.didYouGetBored()).toEqual(true);
  });

  it('should be happy if you play with it and the happy level should go up 23', function() {
    expect(jer.playHs("hide and seek")).toEqual("Jerry played hide and seek! Happy level goes up 3!");
    expect(jer.happyLevel).toEqual(23);
  });

  it('should get very grouchy after 10 seconds without sleep', function() {
    jasmine.clock().tick(10001);
    expect(jer.didYouGetSleepy()).toEqual(true);
  });

  it('should be rested if you let it sleep and the sleep level should go up 10', function() {
    expect(jer.sleepNap("5mins")).toEqual("Jerry sleep 5mins! Sleep level goes up 3!");
    expect(jer.happyLevel).toEqual(20);
  });

});
