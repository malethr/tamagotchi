export let jerry = {
  foodLevel: 10,
  happyLevel: 20,
  sleepLevel: 10,

  setHunger: function(){
    const hungerInterval = setInterval(()=>{
      this.foodLevel--;
      if(this.didYouGetHungry()==true){
        clearInterval(hungerInterval);
        return "Jerry is Hungry";
      }
    },1000);
  },

  didYouGetHungry: function(){
    if(this.foodLevel > 0){
      return false;
    } else {
      return true;
    }
  },

  feed: function(amount){
    let that = this;
    if(this.didYouGetHungry()==false){
      return function(food){
        that.foodLevel += amount;
        return `Jerry ate the ${food}! Food level goes up ${amount}!`;
      };
    } else {
      return 'Sorry jerry is starving!';
    }
  },

  setHappy: function(){
    const happyInterval = setInterval(()=>{
      this.happyLevel--;
      if(this.didYouGetBored()==true){
        clearInterval(happyInterval);
        return "Jerry is sad";
      }
    }, 1000);
  },

  didYouGetBored: function(){
    if(this.happyLevel > 0){
      return false;
    }else{
      return true;
    }
  },

  play: function(amount){
    return((type)=>{
      if(this.foodLevel>0){
        this.happyLevel += amount;
      }
      return `Jerry played ${type}! Happy level goes up ${amount}!`;

    });
  },

  setSleep: function(){
    const sleepInterval = setInterval(()=>{
      this.sleepLevel--;
      if(this.didYouGetSleepy()==true){
        clearInterval(sleepInterval);
        return "Jerry is sleepy";
      }
    }, 1000);
  },
  didYouGetSleepy: function(){
    if(this.sleepLevel > 0){
      return false;
    }else {
      return true;
    }
  },

  sleep: function(amount){
    return((duration)=>{
      if(this.foodLevel>0){
        this.sleepLevel += amount;
      }
      return `Jerry sleep ${duration}! Sleep level goes up ${amount}!`
    });
  },

};
jerry.eatMilk = jerry.feed(3);
jerry.eatCrackers = jerry.feed(6);
jerry.eatCheese = jerry.feed(9);
jerry.playHs = jerry.play(3);
jerry.playSoccer = jerry.play(6);
jerry.playDice = jerry.play(9);
jerry.sleepNap = jerry.sleep(3);
jerry.sleepHalf = jerry.sleep(6);
jerry.sleepLong = jerry.sleep(9);

setTimeout(function(){
      alert("You forgot to feed your tamagotchi.  You're dead!");
  }, 10001);
